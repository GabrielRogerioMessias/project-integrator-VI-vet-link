import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { style } from "../../(tabs)/signup/styles";
import { themes } from "../../global/themes";

interface SubmitButtonProps {
  onPress: () => void;
  loading: boolean;
  label: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onPress,
  loading,
  label,
}) => {
  return (
    <TouchableOpacity style={style.registerBtn} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color={themes.colors.white} />
      ) : (
        <Text style={style.btnText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};
