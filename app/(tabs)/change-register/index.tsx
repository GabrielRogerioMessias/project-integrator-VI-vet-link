import { Keyboard, TouchableWithoutFeedback, View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { style } from "./styles";
import Icon from "../../assets/returnIcon.png";
import { themes } from "../../global/themes";

export default function ChangeRegister() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
            <View style={style.container}>
                <View style={style.topContent}>
                    <Image source={Icon} resizeMode="contain"></Image>
                    <View style={style.topIten}>
                        <Text style={style.headerText}>Alterar Cadastro</Text>
                    </View>
                </View>
                <View style={style.alterContainer}>
                    <View style={style.alterInputContainer}>
                        <View style={style.dataInput}>
                            <TextInput placeholder="Nome" style={style.inputStyle} placeholderTextColor={themes.colors.gray} />
                        </View>
                        <View style={style.dataInput}>
                            <TextInput placeholder="email@exemplo.com.br" style={style.inputStyle} placeholderTextColor={themes.colors.gray} />
                        </View>
                        <View style={style.dataInput}>
                            <TextInput placeholder="CRMV" style={style.inputStyle} placeholderTextColor={themes.colors.gray} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={style.saveBtn}>
                    <Text style={style.textBtn}>SALVAR</Text>
                </TouchableOpacity>
            </View>

        </TouchableWithoutFeedback>

    )
}