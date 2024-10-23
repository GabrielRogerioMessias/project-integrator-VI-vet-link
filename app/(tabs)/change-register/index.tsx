import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { style } from "./styles";
import { themes } from "../../global/themes";
import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import * as Yup from "yup";
import { ValidationError } from "yup";
import { router } from "expo-router";
import { FormInput } from "../../components/FormInput";

export default function ChangeRegister() {
  const [name, setName] = useState("");
  const [crmv, setCrmv] = useState("");
  const [email, setEmail] = useState("");
  const [originalName, setOriginalName] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );

  const schemaForm = Yup.object().shape({
    name: Yup.string()
      .required("O nome é obrigatório")
      .max(30, "O nome deve ter no máximo 30 caracteres"),
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth().currentUser;
      if (user) {
        const userDoc = await firestore()
          .collection("users")
          .doc(user.uid)
          .get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          setName(userData?.name || "");
          setOriginalName(userData?.name || "");
          setCrmv(userData?.crmv || "");
          setEmail(userData?.email);
        }
      }
    };
    fetchUserData();
  }, []);

  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate({ name }, { abortEarly: false });
      console.log("Formulário válido", { name, crmv });
      await updateUser();
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: any = {};
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });
        console.log(validationErrors);
        setErrors(validationErrors);
      }
    }
  };

  const updateUser = async () => {
    if (name === originalName) {
      Alert.alert("Erro", "O novo nome não pode ser igual ao nome atual.");
      return;
    }

    const user = auth().currentUser;
    if (user) {
      try {
        await firestore().collection("users").doc(user.uid).update({
          name,
        });

        Alert.alert("Sucesso", "Dados atualizados com sucesso!");
        router.back();
      } catch (error) {
        console.error("Erro ao atualizar os dados: ", error);
        Alert.alert("Erro", "Problema ao atualizar os dados.");
      }
    }
  };

  const handleSubmit = () => {
    validateForm();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={style.alterContainer}>
          <FormInput
            placeholder="Nome"
            onChangeText={(value) => {
              if (value.length <= 30) {
                setName(value);
              }
            }}
            value={name}
            onFocus={() => {
              setErrors((prev) => ({
                ...prev,
                name: "",
              }));
            }}
            field="name"
            error={errors.name}
          />
          <FormInput
            placeholder="Email"
            value={email}
            field="email"
            editable={false}
          />
          <FormInput
            placeholder="CRMV"
            value={crmv}
            editable={false}
            field="crmv"
          />
        </View>
        <TouchableOpacity style={style.saveBtn} onPress={handleSubmit}>
          <Text style={style.textBtn}>SALVAR</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
