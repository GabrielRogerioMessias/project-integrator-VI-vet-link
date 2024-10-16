import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { style } from "./styles";
import Icon from "../../assets/returnIcon.png";
import { themes } from "../../global/themes";
import React, { useState } from "react";
import * as Yup from "yup";
import { ValidationError } from "yup";

export default function ChangeRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [crmv, setCrmv] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  const schemaForm = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
      .email("Email no formato inválido")
      .required("O Email é obrigatório"),
    crmv: Yup.string().required("O CRMV é obrigatório"),
  });

  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate({ name, email, crmv }, { abortEarly: false });
      console.log("Formulário válido", { name, email, crmv });
      //adicionar logica para enviar a atualização para o BD
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: any = {};
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
        console.log(errors);
        setErrors(validationErrors);
      }
    }
  };
  const handleSubmit = () => {
    validateForm();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <View style={style.container}>
        <View style={style.alterContainer}>
          <View style={style.alterInputContainer}>
            <View
              style={[
                style.dataInput,
                errors.name ? style.dataInputError : null,
              ]}
            >
              <TextInput
                placeholder="Nome"
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
              />
              {errors.name && <Text style={themes.errors}>{errors.name}</Text>}
            </View>
            <View
              style={[
                style.dataInput,
                errors.email ? style.dataInputError : null,
              ]}
            >
              <TextInput
                placeholder="email@exemplo.com.br"
                style={style.inputStyle}
                placeholderTextColor={themes.colors.gray}
                onChangeText={setEmail}
                value={email}
                onFocus={() => {
                  setErrors((prev) => ({
                    ...prev,
                    email: "",
                  }));
                }}
              />
              {errors.email && (
                <Text style={themes.errors}>{errors.email}</Text>
              )}
            </View>
            <View
              style={[
                style.dataInput,
                errors.crmv ? style.dataInputError : null,
              ]}
            >
              <TextInput
                placeholder="CRMV"
                style={style.inputStyle}
                placeholderTextColor={themes.colors.gray}
                onChangeText={setCrmv}
                value={crmv}
                onFocus={() => {
                  setErrors((prev) => ({
                    ...prev,
                    crmv: "",
                  }));
                }}
              />
              {errors.crmv && <Text style={themes.errors}>{errors.crmv}</Text>}
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
