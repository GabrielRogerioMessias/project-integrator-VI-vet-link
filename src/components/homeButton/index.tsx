import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { style } from "./styles";

interface HomeButtonProps {
  onPress: () => void;
  imageSource: ImageSourcePropType;
  buttonText: string;
}

export default function HomeButton({
  onPress,
  imageSource,
  buttonText,
}: HomeButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <View style={style.container}>
        <Image source={imageSource} style={style.image} />
        <Text style={style.text}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
}
