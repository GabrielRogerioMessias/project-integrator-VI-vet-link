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

export default function ChangePassword() {
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirNewPassword, setConfirmNewPassword] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  const schemaForm = Yup.object().shape({
    actualPassword: Yup.string().required("A senha atual é obrigatória"),
    newPassword: Yup.string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("A nova senha é obrigatória"),
    confirNewPassword: Yup.string()
      .oneOf(
        [Yup.ref("newPassword")],
        "A confirmação deve ser igual a nova senhar"
      )
      .required("Confirmação de senha é obrigatória"),
  });

  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate(
        { actualPassword, newPassword, confirNewPassword },
        { abortEarly: false }
      );
      console.log("Formulário válido", {
        actualPassword,
        newPassword,
        confirNewPassword,
      });
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
                errors.actualPassword ? style.dataInputError : null,
              ]}
            >
              <TextInput
                placeholder="Senha atual"
                style={style.inputStyle}
                placeholderTextColor={themes.colors.gray}
                onChangeText={setActualPassword}
                value={actualPassword}
                onFocus={() => {
                  setErrors((prev) => ({
                    ...prev,
                    actualPassword: "",
                  }));
                }}
              />
              {errors.actualPassword && (
                <Text style={themes.errors}>{errors.actualPassword}</Text>
              )}
            </View>
            <View
              style={[
                style.dataInput,
                errors.newPassword ? style.dataInputError : null,
              ]}
            >
              <TextInput
                placeholder="Senha nova"
                style={style.inputStyle}
                placeholderTextColor={themes.colors.gray}
                onChangeText={setNewPassword}
                value={newPassword}
                onFocus={() => {
                  setErrors((prev) => ({
                    ...prev,
                    newPassword: "",
                  }));
                }}
              />
              {errors.newPassword && (
                <Text style={themes.errors}>{errors.newPassword}</Text>
              )}
            </View>
            <View
              style={[
                style.dataInput,
                errors.confirNewPassword ? style.dataInputError : null,
              ]}
            >
              <TextInput
                placeholder="Confirme a nova senha"
                style={style.inputStyle}
                placeholderTextColor={themes.colors.gray}
                onChangeText={setConfirmNewPassword}
                value={confirNewPassword}
                onFocus={() => {
                  setErrors((prev) => ({
                    ...prev,
                    confirNewPassword: "",
                  }));
                }}
              />
              {errors.confirNewPassword && (
                <Text style={themes.errors}>{errors.confirNewPassword}</Text>
              )}
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
