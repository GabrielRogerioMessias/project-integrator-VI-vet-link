import { Keyboard, TouchableWithoutFeedback, View, Alert } from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import { router } from "expo-router";
import messages from "../../utils/messages";
import { FormInput } from "../../components/FormInput";
import { globalStyles } from "../../global/styles";
import { SubmitButton } from "../../components/SubmitButton";
import { changePasswordSchema, validateForm } from "../../utils/validation";
import { style } from "./styles";

export default function ChangePassword() {
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  const handleSubmit = async () => {
    const isValid = await validateForm(
      changePasswordSchema,
      { actualPassword, newPassword, confirmNewPassword },
      setErrors
    );
    if (!isValid) return;

    setLoading(true);

    try {
      const user = auth().currentUser;
      if (!user) {
        Alert.alert("Erro", messages.generic.userNotFound);
        return;
      }

      const userEmail = user.email;
      if (!userEmail) {
        Alert.alert("Erro", messages.generic.emailNotAvailable);
        return;
      }

      const credential = auth.EmailAuthProvider.credential(
        userEmail,
        actualPassword
      );
      await user.reauthenticateWithCredential(credential);

      await user.updatePassword(newPassword);
      Alert.alert("Sucesso", messages.success.passwordUpdated);

      router.back();
    } catch (e: any) {
      const err = e as FirebaseError;
      const firebaseErrorMessage =
        messages.firebaseErrors[err.code] ||
        messages.generic.updateFailed + err.message;

      if (err.code === "auth/wrong-password") {
        setErrors((prev) => ({
          ...prev,
          actualPassword: messages.firebaseErrors["auth/wrong-password"],
        }));
      } else {
        Alert.alert("Erro", firebaseErrorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={style.container}>
          <View style={style.alterContainer}>
            <FormInput
              placeholder="Senha atual"
              onChangeText={setActualPassword}
              value={actualPassword}
              onFocus={() =>
                setErrors((prev) => ({ ...prev, actualPassword: "" }))
              }
              error={errors.actualPassword}
              secureTextEntry
              field="password"
            />
            <FormInput
              placeholder="Nova senha"
              onChangeText={setNewPassword}
              value={newPassword}
              onFocus={() =>
                setErrors((prev) => ({ ...prev, newPassword: "" }))
              }
              error={errors.newPassword}
              secureTextEntry
              field="password"
            />
            <FormInput
              placeholder="Confirme a nova senha"
              onChangeText={setConfirmNewPassword}
              value={confirmNewPassword}
              onFocus={() =>
                setErrors((prev) => ({ ...prev, confirmNewPassword: "" }))
              }
              error={errors.confirmNewPassword}
              secureTextEntry
              lastInput={true}
              field="password"
            />
          </View>
          <SubmitButton
            loading={loading}
            label="SALVAR"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
