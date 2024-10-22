import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as Yup from "yup";
import { ValidationError } from "yup";
import { useState } from "react";
import { style } from "./styles";
import { themes } from "../../global/themes";
import { globalStyles } from "../../global/styles";
import { StatusBar } from "expo-status-bar";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore"; // Importa o Firestore
import { FirebaseError } from "firebase/app";
import { router } from "expo-router";
import messages from "../../utils/messages";

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
    crmv: Yup.string()
      .matches(/^\d{5}$/, "CRMV deve ser numérico e ter 5 dígitos")
      .required("CRMV obrigatório"),
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

      Alert.alert(
        "Sucesso",
        "Cadastro realizado com sucesso! Verifique seu email."
      );
      router.push("/home");
    } catch (e: any) {
      const err = e as FirebaseError;
      const errorMessage =
        messages.firebaseErrors[err.code] || "Erro desconhecido.";
      Alert.alert("Erro", "Falha no cadastro: " + errorMessage);
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
      if (value) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };
  };

  const handleInputFocus = (field: string) => {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const getInputValue = (value: string, field: string) => {
    return errors[field] ? errors[field] : value;
  };

  const getPasswordSecureTextEntry = (field: string) => {
    return errors[field] ? false : true;
  };

  const getInputStyle = (field: string) => {
    return [
      style.inputStyle,
      errors[field] ? style.errorText : style.inputStyle,
    ];
  };

  const handleCrmvChange = (setter: (value: string) => void, field: string) => {
    return (value: string) => {
      if (field === "crmv") {
        const numericValue = value.replace(/[^0-9]/g, "").substring(0, 5);
        setter(numericValue);
      } else {
        setter(value);
      }

      if (value) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };
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
                  style={getInputStyle("name")}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(setName, "name")}
                  value={getInputValue(name, "name")}
                  editable={!loading}
                  onFocus={() => handleInputFocus("name")}
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
                  style={getInputStyle("crmv")}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleCrmvChange(setCrmv, "crmv")}
                  value={getInputValue(crmv, "crmv")}
                  editable={!loading}
                  onFocus={() => handleInputFocus("crmv")}
                  keyboardType="numeric"
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
                  style={getInputStyle("email")}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(setEmail, "email")}
                  value={getInputValue(email, "email")}
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
                  style={getInputStyle("password")}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(setPassword, "password")}
                  value={getInputValue(password, "password")}
                  secureTextEntry={getPasswordSecureTextEntry("password")}
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
                  style={getInputStyle("confirmPassword")}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={handleInputChange(
                    setConfirmPassword,
                    "confirmPassword"
                  )}
                  value={getInputValue(confirmPassword, "confirmPassword")}
                  secureTextEntry={getPasswordSecureTextEntry(
                    "confirmPassword"
                  )}
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
