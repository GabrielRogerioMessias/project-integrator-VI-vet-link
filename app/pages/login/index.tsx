import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "./styles";
import Logo from "../../assets/icon.png";
import { themes } from "../../global/themes";
import auth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      alert("Verifique seu email!");
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Cadastro rejeitado: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Falha no login: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={style.container}>
        <View style={style.topContent}>
          <Image source={Logo} style={style.logo} resizeMode="contain" />
          <View style={style.logoText}>
            <Text style={style.smallText}>VET</Text>
            <Text style={style.bigText}>LINK</Text>
          </View>
        </View>
        <View style={style.midContent}>
          <View style={style.data}>
            <Text style={style.label}>EMAIL</Text>
            <View style={style.boxInput}>
              <MaterialIcons name="email" style={style.icon} />
              <TextInput
                style={style.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="nome@exemplo.com.br"
                placeholderTextColor={themes.colors.gray}
              />
            </View>
          </View>
          <View style={style.data}>
            <Text style={style.label}>SENHA</Text>
            <View style={style.boxInput}>
              <MaterialIcons name="lock" style={style.icon} />
              <TextInput
                style={style.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Senha"
                placeholderTextColor={themes.colors.gray}
              />
              <MaterialCommunityIcons name="eye" style={style.icon} />
            </View>
            <TouchableOpacity style={style.lostPasswordContainer}>
              <Text style={style.lostPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.botContent}>
          {loading ? (
            <ActivityIndicator size={"small"} color={themes.colors.white} />
          ) : (
            <>
              <TouchableOpacity onPress={signIn} style={style.loginBtn}>
                <Text style={style.btnText}>Iniciar sessão</Text>
              </TouchableOpacity>
              <Text style={style.infoText}>OU</Text>
              <View style={style.signupContent}>
                <Text style={style.signupText}>Não possui cadastro?</Text>
                <TouchableOpacity onPress={signUp} style={style.signupBtn}>
                  <Text style={style.btnText}>Cadastre-se agora!</Text>
                </TouchableOpacity>
              </View>
              <Text style={style.infoText}>v1.0</Text>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
