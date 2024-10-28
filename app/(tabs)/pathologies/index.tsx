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

export default function Pathologies() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={style.container}>
          <View style={style.containerOptions}>
            <View style={style.optionContainerOne}>
              <TouchableOpacity
                onPress={() => router.push("/zoonoses/leptospirose")}
                style={style.bntStyle}
              >
                <Text style={style.btnText}>Leptospirose</Text>
              </TouchableOpacity>
              <Feather name="chevron-right" style={style.icon} />
            </View>
            <View style={style.optionContainerOne}>
              <TouchableOpacity
                onPress={() => router.push("/zoonoses/leishmaniose")}
                style={style.bntStyle}
              >
                <Text style={style.btnText}>Leishmaniose</Text>
              </TouchableOpacity>
              <Feather name="chevron-right" style={style.icon} />
            </View>
            <View style={style.optionContainerOne}>
              <TouchableOpacity
                onPress={() => router.push("/zoonoses/raiva")}
                style={style.bntStyle}
              >
                <Text style={style.btnText}>Raiva</Text>
              </TouchableOpacity>
              <Feather name="chevron-right" style={style.icon} />
            </View>
            <View style={style.optionContainersTwo}>
              <TouchableOpacity
                onPress={() => router.push("/zoonoses/toxoplasmose")}
                style={style.bntStyle}
              >
                <Text style={style.btnText}>Toxoplasmose</Text>
              </TouchableOpacity>
              <Feather name="chevron-right" style={style.icon} />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
