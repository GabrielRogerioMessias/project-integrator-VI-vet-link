import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Yup from 'yup';
import { ValidationError } from "yup";
import { useState } from "react";
import { style } from "./styles";
import { themes } from "../../global/themes";
import Icon from "../../assets/returnIcon.png";
import { globalStyles } from "../../global/styles";

export default function SignUp() {
  const [name, setName] = useState("");
  const [crmv, setCrmv] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});

  const schemaForm = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    crmv: Yup.string().required("CRMV é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "As senhas devem corresponder")
      .required("Confirmação de senha é obrigatória"),
  })

  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate({ name, crmv, email, password, confirmPassword }, { abortEarly: false });
      console.log("Formulário válido", { name, crmv, email, password });
      //adicionar logica para enviar para o bd
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: any = {};
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
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
            <Image source={Icon} resizeMode="contain" />
            <View style={style.topIten}>
              <Text style={style.headerText}>Cadastro</Text>
            </View>
          </View>

          <View style={style.headerContent}>
            <Text style={style.infoText}>DADOS PESSOAIS</Text>
          </View>
          <View style={style.registerContainer}>
            <View style={style.inputContent}>
              <View style={[style.dataInput, errors.name ? style.dataInputError : null]}>
                <TextInput
                  placeholder="NOME"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={setName}
                  value={name}
                  onFocus={() => {
                    setErrors((prev) => ({
                      ...prev,
                      name: "",
                    }));
                  }}
                ></TextInput>
                {errors.name && (
                  <Text style={themes.errors}>{errors.name}</Text>
                )}
              </View>

              <View style={[style.dataInput, errors.crmv ? style.dataInputError : null]}>
                <TextInput
                  placeholder="CRMV"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={setCrmv}
                  onFocus={() => {
                    setErrors((prev) => ({
                      ...prev,
                      crmv: "",
                    }));
                  }}
                  value={crmv}
                ></TextInput>
                {errors.crmv && (
                  <Text style={themes.errors}>{errors.crmv}</Text>
                )}
              </View>

              <View style={[style.dataInput, errors.email ? style.dataInputError : null]}>
                <TextInput
                  placeholder="EMAIL"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={setEmail}
                  onFocus={() => {
                    setErrors((prev) => ({
                      ...prev,
                      email: "",
                    }));
                  }}
                  value={email}
                ></TextInput>
                {errors.email && (
                  <Text style={themes.errors}>{errors.email}</Text>
                )}
              </View>

              <View style={[style.dataInput, errors.password ? style.dataInputError : null]}>
                <TextInput
                  placeholder="SENHA"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={setPassword}
                  onFocus={() => {
                    setErrors((prev) => ({
                      ...prev,
                      password: "",
                    }));
                  }}
                  value={password}
                ></TextInput>
                {errors.password && (
                  <Text style={themes.errors}>{errors.password}</Text>
                )}
              </View>

              <View style={[style.dataInput, errors.confirmPassword ? style.dataInputError : null]}>
                <TextInput
                  placeholder="CONFIRME A SENHA"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                  onChangeText={setConfirmPassword}
                  onFocus={() => {
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: "",
                    }));
                  }}
                  value={confirmPassword}
                ></TextInput>
                {errors.confirmPassword && (
                  <Text style={themes.errors}>{errors.confirmPassword}</Text>
                )}
              </View>
            </View>
          </View>
          <TouchableOpacity style={style.registerBtn} onPress={handleSubmit}>
            <Text style={style.btnText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
