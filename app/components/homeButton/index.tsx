import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { style } from "./styles";
import { themes } from "../../global/themes";

interface HomeButtonProps {
  onPress: () => void;
  VectorIcon: React.FC<SvgProps>;
  buttonText: string;
  iconSize?: number;
  iconColor?: string;
}

export default function HomeButton({
  onPress,
  VectorIcon,
  buttonText,
  iconSize = 60,
  iconColor = themes.colors.darkGreen,
}: HomeButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <View style={style.container}>
        <VectorIcon width={iconSize} height={iconSize} fill={iconColor} />
        <Text style={style.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}
