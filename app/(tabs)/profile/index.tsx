import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { style } from "./styles";
import Icon from "../../assets/returnIcon.png";
import moreThan from "../../assets/MoreThanIcon.png";
import { globalStyles } from "../../global/styles";
import { router } from "expo-router";

export default function Profile() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={style.container}>
          <View style={style.containerOptions}>
            <View style={style.optionContainerOne}>
              <TouchableOpacity
                style={style.bntStyle}
                onPress={() => router.push("change-register")}
              >
                <Text style={style.btnText}>Alterar Cadastro</Text>
              </TouchableOpacity>
              <Image source={moreThan} resizeMode="contain" />
            </View>
            <View style={style.optionContainersTwo}>
              <TouchableOpacity
                style={style.bntStyle}
                onPress={() => router.push("change-password")}
              >
                <Text style={style.btnText}>Alterar Senha</Text>
              </TouchableOpacity>
              <Image source={moreThan} resizeMode="contain" />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
