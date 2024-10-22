import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { style } from "./styles";
import { themes } from "../../global/themes";
import React, { useState } from "react";
import * as Yup from "yup";
import { ValidationError } from "yup";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import { router } from "expo-router";
import messages from "../../utils/messages"; // Importa o arquivo de mensagens

export default function ChangePassword() {
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirNewPassword, setConfirmNewPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  // Esquema de validação
  const schemaForm = Yup.object().shape({
    actualPassword: Yup.string().required(
      messages.validationErrors.actualPassword
    ),
    newPassword: Yup.string()
      .min(6, messages.validationErrors.newPasswordMin)
      .notOneOf(
        [Yup.ref("actualPassword")],
        messages.validationErrors.newPasswordNotSame
      )
      .required(messages.validationErrors.newPasswordRequired),
    confirNewPassword: Yup.string()
      .oneOf(
        [Yup.ref("newPassword")],
        messages.validationErrors.confirmPasswordMatch
      )
      .required(messages.validationErrors.confirmNewPassword),
  });

  // Validação do formulário
  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate(
        { actualPassword, newPassword, confirNewPassword },
        { abortEarly: false }
      );
      return true;
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: any = {};
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      }
      return false;
    }
  };

  // Submissão do formulário
  const handleSubmit = async () => {
    const isValid = await validateForm();
    if (!isValid) return;

    try {
      const user = auth().currentUser;
      if (!user) {
        alert(messages.generic.userNotFound);
        return;
      }

      const userEmail = user.email;
      if (!userEmail) {
        alert(messages.generic.emailNotAvailable);
        return;
      }

      const credential = auth.EmailAuthProvider.credential(
        userEmail,
        actualPassword
      );
      await user.reauthenticateWithCredential(credential);

      await user.updatePassword(newPassword);
      alert(messages.success.passwordUpdated);

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
        alert(firebaseErrorMessage); // Usa a mensagem apropriada
      }
    }
  };

  const handleInputChange = (
    setter: (value: string) => void,
    field: string
  ) => {
    return (value: string) => {
      setter(value);
      if (value) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };
  };

  const handleInputFocus = (field: string) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const getInputStyle = (field: string) => {
    return [style.inputStyle, errors[field] ? style.errorText : null];
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={style.alterContainer}>
          <View style={style.alterInputContainer}>
            <View style={style.dataInput}>
              <TextInput
                placeholder="Senha atual"
                style={getInputStyle("actualPassword")}
                placeholderTextColor={themes.colors.gray}
                onChangeText={handleInputChange(
                  setActualPassword,
                  "actualPassword"
                )}
                value={
                  errors.actualPassword ? errors.actualPassword : actualPassword
                }
                onFocus={() => handleInputFocus("actualPassword")}
              />
            </View>
            <View style={style.dataInput}>
              <TextInput
                placeholder="Nova senha"
                style={getInputStyle("newPassword")}
                placeholderTextColor={themes.colors.gray}
                onChangeText={handleInputChange(setNewPassword, "newPassword")}
                value={errors.newPassword ? errors.newPassword : newPassword}
                onFocus={() => handleInputFocus("newPassword")}
              />
            </View>
            <View style={style.dataInput}>
              <TextInput
                placeholder="Confirme a nova senha"
                style={getInputStyle("confirNewPassword")}
                placeholderTextColor={themes.colors.gray}
                onChangeText={handleInputChange(
                  setConfirmNewPassword,
                  "confirNewPassword"
                )}
                value={
                  errors.confirNewPassword
                    ? errors.confirNewPassword
                    : confirNewPassword
                }
                onFocus={() => handleInputFocus("confirNewPassword")}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={style.saveBtn} onPress={handleSubmit}>
          <Text style={style.textBtn}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
