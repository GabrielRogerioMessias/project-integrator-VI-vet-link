import React, { useState } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import YellowStar from "../../assets/YellowStar.png";
import Icon from "../../assets/returnIcon.png";
import BlackWithStar from "../../assets/Star.png";
import { style } from "./styles";
import { themes } from "../../global/themes";
import * as Yup from "yup";
import { ValidationError } from "yup";

export default function FeedBackApp() {
  const [selectedStars, setSelectedStars] = useState(0);
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>(
    {}
  );
  const handleStarPress = (index: number) => {
    setSelectedStars(index + 1);
  };
  const schemaForm = Yup.object().shape({
    selectedStars: Yup.number()
      .min(1, "Clique na estrela para avaliar")
      .required("Clique na estrela para avaliarr"),
  });

  const validateForm = async () => {
    try {
      setErrors({});
      await schemaForm.validate({ selectedStars }, { abortEarly: false });
      console.log("Formulário válido", { selectedStars, comment });
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View
          style={[
            style.containerOptions,
            errors.selectedStars ? style.containerOptionsError : null,
          ]}
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <TouchableOpacity
              key={index}
              style={style.startFdb}
              onPress={() => {
                handleStarPress(index);
                setErrors((prev) => ({
                  ...prev,
                  selectedStars: "",
                }));
              }}
            >
              <Image
                source={selectedStars > index ? YellowStar : BlackWithStar}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
        {errors.selectedStars && (
          <Text style={themes.errors}>{errors.selectedStars}</Text>
        )}
        <View style={style.subTitleStyle}>
          <Text style={style.subTitleText}>OBSERVAÇÕES</Text>
        </View>

        <View style={style.containerInputComment}>
          <TextInput
            placeholder="(Opcional)"
            placeholderTextColor={themes.colors.gray}
            style={style.textInput}
            value={comment}
            onChangeText={setComment}
          />
        </View>

        <View style={style.containerBtn}>
          <TouchableOpacity style={style.btnArea} onPress={handleSubmit}>
            <Text style={style.btnText}>CONFIRMAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
