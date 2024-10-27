import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import { globalStyles } from "../../global/styles";
import { style } from "./styles";
import { StatusBar } from "expo-status-bar";
import { FormInput } from "../../components/FormInput";
import { SubmitButton } from "../../components/SubmitButton";
import { useState } from "react";
import auth from "@react-native-firebase/auth";
import { router } from "expo-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, insira um e-mail.");
      return;
    }

    setLoading(true);
    try {
      await auth().sendPasswordResetEmail(email);

      Alert.alert(
        "Sucesso",
        `Se o e-mail for válido, será enviado um link para redefinir sua senha para: ${email}.`
      );
      router.back();
    } catch (error: any) {
      console.error("Erro ao enviar o e-mail de redefinição: ", error);
      if (error.code === "auth/user-not-found") {
        Alert.alert("Erro", "E-mail não registrado.");
      } else {
        Alert.alert("Erro", "Não foi possível enviar o e-mail de redefinição.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <StatusBar style="auto" backgroundColor="#F0F0F0" />
        <View style={style.container}>
          <Text style={style.description}>
            Digite seu e-mail abaixo e enviaremos um link para redefinir sua
            senha.
          </Text>
          <FormInput
            placeholder="EMAIL"
            value={email}
            onChangeText={setEmail}
          />
          <SubmitButton
            onPress={handleForgotPassword}
            loading={loading}
            label="ENVIAR"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
