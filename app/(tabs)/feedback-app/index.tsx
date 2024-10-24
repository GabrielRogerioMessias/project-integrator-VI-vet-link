import React, { useState, useEffect } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { style } from "./styles";
import { themes } from "../../global/themes";
import * as Yup from "yup";
import { ValidationError } from "yup";
import { SubmitButton } from "../../components/SubmitButton";
import { globalStyles } from "../../global/styles";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import { router } from "expo-router";

export default function FeedBackApp() {
  const [selectedStars, setSelectedStars] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );
  const [userName, setUserName] = useState<string>("");

  const fetchUserName = async () => {
    const user = auth().currentUser;
    if (user) {
      const userDoc = await firestore().collection("users").doc(user.uid).get();
      if (userDoc.exists) {
        const data = userDoc.data();
        setUserName(data?.name || "");
      }
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  const handleStarPress = (index: number) => {
    setSelectedStars(index + 1);
  };

  const schemaForm = Yup.object().shape({
    selectedStars: Yup.number().min(1, "Clique nas estrelas para avaliar"),
  });

  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate({ selectedStars }, { abortEarly: false });
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
      const user = auth().currentUser;

      if (!user || !userName) {
        Alert.alert(
          "Erro",
          "Nenhum usuário autenticado ou nome do usuário não encontrado."
        );
        setLoading(false);
        return;
      }

      await firestore()
        .collection("feedbacks")
        .doc(user.uid)
        .collection(userName)
        .add({
          userEmail: user.email,
          selectedStars,
          comment,
          timestamp: firestore.FieldValue.serverTimestamp(),
        });

      Alert.alert("Sucesso", "Feedback enviado com sucesso!");
      router.back();
    } catch (error) {
      console.error("Erro ao enviar feedback:", error);
      Alert.alert("Erro", "Não foi possível enviar o feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={style.container}>
          <View style={style.starsContainer}>
            <View
              style={[
                style.starsContent,
                errors.selectedStars ? style.starsContentError : null,
              ]}
            >
              {[0, 1, 2, 3, 4].map((index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleStarPress(index);
                    setErrors((prev) => ({
                      ...prev,
                      selectedStars: "",
                    }));
                  }}
                >
                  <FontAwesome
                    name={selectedStars > index ? "star" : "star-o"}
                    size={32}
                    color={
                      selectedStars > index
                        ? themes.colors.star
                        : themes.colors.black
                    }
                  />
                </TouchableOpacity>
              ))}
            </View>
            {errors.selectedStars && (
              <Text style={style.errorText}>{errors.selectedStars}</Text>
            )}
          </View>

          <View style={style.containerComment}>
            <Text style={style.subTitleText}>COMENTÁRIOS</Text>
            <TextInput
              placeholder="(Opcional)"
              placeholderTextColor={themes.colors.gray}
              style={style.textInput}
              value={comment}
              onChangeText={(value) => {
                if (value.length <= 300) {
                  setComment(value);
                }
              }}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <SubmitButton
            loading={loading}
            label="CONFIRMAR"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
