import { Keyboard, TouchableWithoutFeedback, View, Image, Text, TouchableOpacity } from "react-native";
import { style } from "./styles";
import Icon from "../../assets/returnIcon.png"
import moreThan from "../../assets/MoreThanIcon.png"

export default function Profile() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={style.container}>
                <View style={style.topContent}>
                    <Image source={Icon} resizeMode="contain" />
                    <View style={style.topIten}>
                        <Text style={style.headerTop}>Perfil</Text>
                    </View>
                </View>
                <View style={style.containerOptions}>
                    <View style={style.optionContainerOne}>
                        <TouchableOpacity style={style.bntStyle}>
                            <Text style={style.btnText}>Alterar Cadastro</Text>
                        </TouchableOpacity>
                        <Image source={moreThan} resizeMode="contain" />
                    </View>
                    <View style={style.optionContainersTwo}>
                        <TouchableOpacity style={style.bntStyle}>
                            <Text style={style.btnText}>Alterar Senha</Text>
                        </TouchableOpacity>
                        <Image source={moreThan} resizeMode="contain" />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >

    )
}