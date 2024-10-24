import React, { useState } from "react";
import {
  View,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { FormInput } from "../../components/FormInput";
import { SubmitButton } from "../../components/SubmitButton";
import { schemaForm, validateForm } from "../../utils/validation";
import { globalStyles } from "../../global/styles";
import { style } from "./styles";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { FirebaseError } from "firebase/app";
import { router } from "expo-router";
import messages from "../../utils/messages";
import { StatusBar } from "expo-status-bar";

export default function SignUp() {
  const [name, setName] = useState("");
  const [crmv, setCrmv] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  const handleSubmit = async () => {
    const isValid = await validateForm(
      schemaForm,
      { name, crmv, email, password, confirmPassword },
      setErrors
    );
    if (!isValid) return;

    setLoading(true);

    try {
      const existingUser = await firestore()
        .collection("users")
        .where("crmv", "==", crmv)
        .get();

      if (!existingUser.empty) {
        Alert.alert("Erro", "CRMV já está em uso.");
        setLoading(false);
        return;
      }

      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      await firestore().collection("users").doc(userCredential.user.uid).set({
        id: userCredential.user.uid,
        name,
        crmv,
        email,
      });

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
    } catch (e: any) {
      const err = e as FirebaseError;
      const errorMessage =
        messages.firebaseErrors[err.code] || "Erro desconhecido.";
      Alert.alert("Erro", "Falha no cadastro: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <StatusBar style="auto" backgroundColor="#F0F0F0" />
        <View style={style.container}>
          <View style={style.mainContent}>
            <Text style={style.infoText}>DADOS PESSOAIS</Text>
            <View style={style.registerContainer}>
              <FormInput
                placeholder="NOME"
                value={name}
                onChangeText={setName}
                onFocus={() => setErrors((prev) => ({ ...prev, name: "" }))}
                error={errors.name}
              />
              <FormInput
                placeholder="CRMV"
                value={crmv}
                onChangeText={(value) =>
                  setCrmv(value.replace(/[^0-9]/g, "").substring(0, 5))
                }
                onFocus={() => setErrors((prev) => ({ ...prev, crmv: "" }))}
                error={errors.crmv}
                keyboardType="numeric"
              />
              <FormInput
                placeholder="EMAIL"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setErrors((prev) => ({ ...prev, email: "" }))}
                error={errors.email}
              />
              <FormInput
                placeholder="SENHA"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setErrors((prev) => ({ ...prev, password: "" }))}
                error={errors.password}
                secureTextEntry
                field="password"
              />
              <FormInput
                placeholder="CONFIRME A SENHA"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onFocus={() =>
                  setErrors((prev) => ({ ...prev, confirmPassword: "" }))
                }
                error={errors.confirmPassword}
                secureTextEntry
                lastInput={true}
                field="password"
              />
            </View>
          </View>
          <SubmitButton
            onPress={handleSubmit}
            loading={loading}
            label="CADASTRAR"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
