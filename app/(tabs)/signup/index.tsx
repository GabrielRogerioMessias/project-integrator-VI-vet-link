import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Yup from "yup";
import { ValidationError } from "yup";
import { useState } from "react";
import { style } from "./styles"; // Assumindo que você já tem estilos definidos
import { themes } from "../../global/themes";
import { globalStyles } from "../../global/styles";
import { StatusBar } from "expo-status-bar";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
import { router } from "expo-router";

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

  const schemaForm = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    crmv: Yup.string().required("CRMV obrigatório"),
    email: Yup.string().email("Email inválido").required("Email obrigatório"),
    password: Yup.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "As senhas devem corresponder")
      .required("Confirmação de senha é obrigatória"),
  });

  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate(
        { name, crmv, email, password, confirmPassword },
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

  const handleSubmit = async () => {
    const isValid = await validateForm();
    if (!isValid) return;

    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      alert("Cadastro realizado com sucesso! Verifique seu email.");
      router.push("/home"); // Navega para a tela de "home" após o cadastro
    } catch (e: any) {
      const err = e as FirebaseError;
      alert("Falha no cadastro: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    setter: (value: string) => void,
    field: string
  ) => {
    return (value: string) => {
      setter(value);
      // Remover o erro se o usuário digitar algo
      if (value) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };
  };

  const handleInputFocus = (field: string) => {
    setErrors((prev) => ({ ...prev, [field]: "" })); // Limpa o erro ao focar no input
  };

  const getInputValue = (value: string, field: string) => {
    // Se houver um erro para o campo, exiba a mensagem de erro como valor
    return errors[field] ? errors[field] : value;
  };

  const getPasswordSecureTextEntry = (field: string) => {
    // Exibe a senha normalmente se houver um erro
    return errors[field] ? false : true;
  };

  const getInputStyle = (field: string) => {
    return [
      style.inputStyle,
      errors[field] ? style.errorText : style.inputStyle, // Aplica o estilo de erro ou normal
    ];
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <StatusBar style="auto" backgroundColor="#F0F0F0" />
        <View style={style.container}>
          <View style={style.headerContent}>
            <Text style={style.infoText}>DADOS PESSOAIS</Text>
          </View>
          <View style={style.registerContainer}>
            <View style={style.inputContent}>
              <View
                style={[
                  style.dataInput,
                  errors.name ? style.dataInputError : null,
                ]}
              >
                <TextInput
                  placeholder="NOME"
                  style={getInputStyle("name")} // Usa a função para definir o estilo
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(setName, "name")}
                  value={getInputValue(name, "name")} // Usa a função para definir o valor
                  editable={!loading}
                  onFocus={() => handleInputFocus("name")} // Limpa o erro ao focar
                />
              </View>

              <View
                style={[
                  style.dataInput,
                  errors.crmv ? style.dataInputError : null,
                ]}
              >
                <TextInput
                  placeholder="CRMV"
                  style={getInputStyle("crmv")} // Usa a função para definir o estilo
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(setCrmv, "crmv")}
                  value={getInputValue(crmv, "crmv")} // Usa a função para definir o valor
                  editable={!loading}
                  onFocus={() => handleInputFocus("crmv")}
                />
              </View>

              <View
                style={[
                  style.dataInput,
                  errors.email ? style.dataInputError : null,
                ]}
              >
                <TextInput
                  placeholder="EMAIL"
                  style={getInputStyle("email")} // Usa a função para definir o estilo
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(setEmail, "email")}
                  value={getInputValue(email, "email")} // Usa a função para definir o valor
                  editable={!loading}
                  onFocus={() => handleInputFocus("email")}
                />
              </View>

              <View
                style={[
                  style.dataInput,
                  errors.password ? style.dataInputError : null,
                ]}
              >
                <TextInput
                  placeholder="SENHA"
                  style={getInputStyle("password")} // Usa a função para definir o estilo
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(setPassword, "password")}
                  value={getInputValue(password, "password")} // Usa a função para definir o valor
                  secureTextEntry={getPasswordSecureTextEntry("password")} // Altera para mostrar a senha ou não
                  editable={!loading}
                  onFocus={() => handleInputFocus("password")}
                />
              </View>

              <View
                style={[
                  style.dataInput,
                  errors.confirmPassword ? style.dataInputError : null,
                ]}
              >
                <TextInput
                  placeholder="CONFIRME A SENHA"
                  style={getInputStyle("confirmPassword")} // Usa a função para definir o estilo
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(
                    setConfirmPassword,
                    "confirmPassword"
                  )}
                  value={getInputValue(confirmPassword, "confirmPassword")} // Usa a função para definir o valor
                  secureTextEntry={getPasswordSecureTextEntry(
                    "confirmPassword"
                  )} // Altera para mostrar a senha ou não
                  editable={!loading}
                  onFocus={() => handleInputFocus("confirmPassword")}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity style={style.registerBtn} onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color={themes.colors.white} />
            ) : (
              <Text style={style.btnText}>CADASTRAR</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
