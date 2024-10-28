import React, { useEffect, useState } from "react";
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
  Alert,
  Platform,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "./styles";
import Logo from "../../assets/icon.svg";
import { themes } from "../../global/themes";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import { globalStyles } from "../../global/styles";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import messages from "../../utils/messages";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        setUser(currentUser);
        router.push("/home");
      }
      setInitializing(false);
    };

    checkAuthStatus();

    const unsubscribe = auth().onAuthStateChanged((_user) => {
      setUser(_user);

      if (_user) {
        router.push("/home");
      }

      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [initializing]);

  const signIn = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos antes de continuar.");
      return;
    }

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e: any) {
      const err = e as FirebaseError;
      const errorMessage =
        messages.firebaseErrors[err.code] ||
        "Verifique suas credenciais e tente novamente.";
      Alert.alert("Falha no login ", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (initializing) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size={"large"} color={themes.colors.darkGreen} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={style.container}>
        <StatusBar backgroundColor={themes.colors.lightGreen} />
        <View style={style.topContent}>
          <Logo width={160} height={160} />
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
                secureTextEntry={!isPasswordVisible}
                placeholder="Senha"
                placeholderTextColor={themes.colors.gray}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <MaterialCommunityIcons
                  name={isPasswordVisible ? "eye" : "eye-off"}
                  style={style.icon}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/forgot-password")}
              style={style.lostPasswordContainer}
            >
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
                <TouchableOpacity
                  onPress={() => router.push("/signup")}
                  style={style.signupBtn}
                >
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
