import React from "react";
import { View, TextInput } from "react-native";
import { style } from "../../(tabs)/signup/styles";
import { themes } from "../../global/themes";

interface FormInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  editable?: boolean;
  onFocus: () => void;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric";
}

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  onChangeText,
  editable = true,
  onFocus,
  error,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  const inputStyle = [
    style.inputStyle,
    error ? style.errorText : style.inputStyle,
  ];

  return (
    <View style={[style.dataInput, error ? style.dataInputError : null]}>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        placeholderTextColor={themes.colors.gray}
        onChangeText={onChangeText}
        value={error || value}
        editable={editable}
        onFocus={onFocus}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};
