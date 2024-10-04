import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import YellowStar from "../../assets/YellowStar.png";
import Icon from "../../assets/returnIcon.png";
import BlackWithStar from "../../assets/Star.png";
import { style } from "./styles";
import { themes } from "../../global/themes";

export default function FeedBackApp() {
    const [selectedStars, setSelectedStars] = useState(0);
    const [comment, setComment] = useState("");
    const handleStarPress = (index: number) => {
        setSelectedStars(index + 1);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={style.container}>
                <View style={style.topContent}>
                    <Image source={Icon} resizeMode="contain" />
                    <View style={style.topIten}>
                        <Text style={style.headerTop}>Avaliar App</Text>
                    </View>
                </View>

                <View style={style.containerOptions}>
                    {[0, 1, 2, 3, 4].map((index) => (
                        <TouchableOpacity key={index} style={style.startFdb} onPress={() => handleStarPress(index)}>
                            <Image
                                source={selectedStars > index ? YellowStar : BlackWithStar}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={style.subTitleStyle}>
                    <Text style={style.subTitleText}>OBSERVAÇÕES</Text>
                </View>

                <View style={style.containerInputComment}>
                    <View style={style.inputComent}>
                        <TextInput
                            placeholder="(Opcional)"
                            placeholderTextColor={themes.colors.gray}
                            style={style.textInput}
                            value={comment}
                            onChangeText={setComment}
                        />
                    </View>
                </View>

                <View style={style.containerBtn}>
                    <TouchableOpacity style={style.btnArea} onPress={() => console.log(selectedStars, comment)}>
                        <Text style={style.btnText}>CONFIRMAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
