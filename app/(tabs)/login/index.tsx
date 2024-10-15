import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "./styles";
import Logo from "../../assets/icon.png";
import { globalStyles } from "../../global/styles";
import { themes } from "../../global/themes";
import * as Yup from "yup";
import { ValidationError } from "yup";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});

  const schemaForm = Yup.object().shape({
    password: Yup.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  })
  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate({ email, password }, { abortEarly: false });
      console.log("Formulário válido", { email, password });
      //adicionar logica para login
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: any = {};
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
        console.log(errors)
      }
    }
  };
  const handleSubmit = () => {
    validateForm();
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={style.container}>
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
              <View style={[style.boxInput, errors.email ? style.boxInputError : null]}>
                <MaterialIcons name="email" style={style.icon} />
                <TextInput
                  style={style.input}
                  placeholder="nome@exemplo.com.br"
                  onFocus={() => {
                    setErrors((prev) => ({
                      ...prev,
                      email: "",
                    }));
                  }}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              {errors.email && (
                <Text style={themes.errors}>{errors.email}</Text>
              )}
            </View>
            <View style={style.data}>
              <Text style={style.label}>SENHA</Text>
              <View style={[style.boxInput, errors.password ? style.boxInputError : null]}>
                <MaterialIcons name="lock" style={style.icon} />
                <TextInput
                  style={style.input}
                  placeholder="Senha"
                  value={password}
                  onFocus={() => {
                    setErrors((prev) => ({
                      ...prev,
                      password: "",
                    }));
                  }}
                  onChangeText={setPassword} />
                <MaterialCommunityIcons name="eye" style={style.icon} />
              </View>
              {errors.password && (
                <Text style={themes.errors}>{errors.password}</Text>
              )}
              <TouchableOpacity style={style.lostPasswordContainer}>
                <Text style={style.lostPassword}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.botContent}>
            <TouchableOpacity style={style.loginBtn} onPress={handleSubmit}>
              <Text style={style.btnText}>Iniciar sessão</Text>
            </TouchableOpacity>
            <Text style={style.infoText}>OU</Text>
            <View style={style.signupContent}>
              <Text style={style.signupText}>Não possui cadastro?</Text>
              <TouchableOpacity style={style.signupBtn}>
                <Text style={style.btnText}>Cadastre-se agora!</Text>
              </TouchableOpacity>
            </View>
            <Text style={style.infoText}>v1.0</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
