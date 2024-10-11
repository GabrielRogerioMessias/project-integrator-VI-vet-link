import { Keyboard, TouchableWithoutFeedback, View, Text } from "react-native";
import { style } from "./styles";
import HomeButton from "../../components/homeButton";
import { router } from "expo-router";
import { globalStyles } from "../../global/styles";

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={style.container}>
          <View style={style.content}>
            <View style={style.buttonsContainer}>
              <View style={style.row1}>
                <HomeButton
                  onPress={() => router.push("pathologies")}
                  imageSource={require("../../assets/Body Cells.png")}
                  buttonText="Zoonoses"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
