import { Keyboard, TouchableWithoutFeedback, View, Image, Text, TouchableOpacity } from "react-native";

import Icon from "../../assets/returnIcon.png"
import moreThan from "../../assets/MoreThanIcon.png"
import { style } from "./styles";

export default function Pathologies() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={style.container}>
                <View style={style.topContent}>
                    <Image source={Icon} resizeMode="contain" />
                    <View style={style.topIten}>
                        <Text style={style.headerTop}>Zoonoses</Text>
                    </View>
                </View>
                <View style={style.containerOptions}>
                    <View style={style.optionContainerOne}>
                        <TouchableOpacity style={style.bntStyle}>
                            <Text style={style.btnText}>Leptospirose</Text>
                        </TouchableOpacity>
                        <Image source={moreThan} resizeMode="contain" />
                    </View>
                    <View style={style.optionContainerOne}>
                        <TouchableOpacity style={style.bntStyle}>
                            <Text style={style.btnText}>Leishmaniose</Text>
                        </TouchableOpacity>
                        <Image source={moreThan} resizeMode="contain" />
                    </View>
                    <View style={style.optionContainerOne}>
                        <TouchableOpacity style={style.bntStyle}>
                            <Text style={style.btnText}>Raiva</Text>
                        </TouchableOpacity>
                        <Image source={moreThan} resizeMode="contain" />
                    </View>
                    <View style={style.optionContainersTwo}>
                        <TouchableOpacity style={style.bntStyle}>
                            <Text style={style.btnText}>Taxoplasmose</Text>
                        </TouchableOpacity>
                        <Image source={moreThan} resizeMode="contain" />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback >

    )
}