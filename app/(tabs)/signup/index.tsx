import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { style } from "./styles";
import { themes } from "../../global/themes";
import Icon from "../../assets/returnIcon.png";
import { globalStyles } from "../../global/styles";

export default function SignUp() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <View style={style.container}>
          <View style={style.topContent}>
            <Image source={Icon} resizeMode="contain" />
            <View style={style.topIten}>
              <Text style={style.headerText}>Cadastro</Text>
            </View>
          </View>

          <View style={style.headerContent}>
            <Text style={style.infoText}>DADOS PESSOAIS</Text>
          </View>
          <View style={style.registerContainer}>
            <View style={style.inputContent}>
              <View style={style.dataInput}>
                <TextInput
                  placeholder="NOME"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                ></TextInput>
              </View>
              <View style={style.dataInput}>
                <TextInput
                  placeholder="CRMV"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                ></TextInput>
              </View>
              <View style={style.dataInput}>
                <TextInput
                  placeholder="EMAIL"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                ></TextInput>
              </View>
              <View style={style.dataInput}>
                <TextInput
                  placeholder="SENHA"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                ></TextInput>
              </View>
              <View style={style.dataInput}>
                <TextInput
                  placeholder="CONFIRME A SENHA"
                  style={style.inputStyle}
                  placeholderTextColor={themes.colors.gray}
                ></TextInput>
              </View>
            </View>
          </View>
          <TouchableOpacity style={style.registerBtn}>
            <Text style={style.btnText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
