import React from "react";
import { View, TextInput } from "react-native";
import { style } from "./styles";
import { themes } from "../../global/themes";

interface FormInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  editable?: boolean;
  onFocus?: () => void;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "numeric";
  lastInput?: boolean;
  field?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  value,
  onChangeText = () => {},
  editable = true,
  onFocus = () => {},
  error,
  secureTextEntry = false,
  keyboardType = "default",
  lastInput = false,
  field,
}) => {
  const inputStyle = [
    style.inputStyle,
    error ? style.errorText : style.inputStyle,
  ];

  const containerStyle = [
    lastInput ? style.dataInputnoBorder : style.dataInput,
    error
      ? lastInput
        ? style.dataInputErrornoBorder
        : style.dataInputError
      : lastInput
      ? style.dataInputnoBorder
      : null,
  ];

  const currentSecureTextEntry =
    error && field === "password" ? false : secureTextEntry;

  return (
    <View style={containerStyle}>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        placeholderTextColor={themes.colors.gray}
        onChangeText={onChangeText}
        value={error || value}
        editable={editable}
        onFocus={onFocus}
        secureTextEntry={currentSecureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};
