import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { style } from "./styles";
import { globalStyles } from "../../global/styles";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function Profile() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={style.container}>
          <View style={style.containerOptions}>
            <View style={style.optionContainerOne}>
              <TouchableOpacity
                style={style.bntStyle}
                onPress={() => router.push("/change-register")}
              >
                <Text style={style.btnText}>Alterar Cadastro</Text>
              </TouchableOpacity>
              <Feather name="chevron-right" style={style.icon} />
            </View>
            <View style={style.optionContainersTwo}>
              <TouchableOpacity
                style={style.bntStyle}
                onPress={() => router.push("/change-password")}
              >
                <Text style={style.btnText}>Alterar Senha</Text>
              </TouchableOpacity>
              <Feather name="chevron-right" style={style.icon} />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
