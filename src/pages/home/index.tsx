import { Keyboard, TouchableWithoutFeedback, View, Text } from "react-native";
import { style } from "./styles";
import HomeButton from "../../components/homeButton";

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>
        <View style={style.content}>
          <Text style={style.title}>Olá, nome</Text>
          <View style={style.buttonsContainer}>
            <View style={style.row1}>
              <HomeButton
                onPress={() => alert("patologias")}
                imageSource={require("../../assets/Body Cells.png")}
                buttonText="patologias"
              />
              <HomeButton
                onPress={() => alert("Analises clínicas")}
                imageSource={require("../../assets/Blood Sample.png")}
                buttonText="patologias"
              />
            </View>
            <View style={style.row2}>
              <HomeButton
                onPress={() => alert("Prescrição")}
                imageSource={require("../../assets/Treatment.png")}
                buttonText="Prescrição"
              />
              <HomeButton
                onPress={() => alert("Emergencia")}
                imageSource={require("../../assets/Veterinarian.png")}
                buttonText="Emergência"
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
