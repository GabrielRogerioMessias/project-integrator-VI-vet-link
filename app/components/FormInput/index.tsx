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
  field: string;
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
  field,
}) => {
  const inputStyle = [
    style.inputStyle,
    error ? style.errorText : style.inputStyle,
  ];

  const containerStyle = [
    field === "confirmPassword" ? style.dataInputnoBorder : style.dataInput,
    error
      ? field === "confirmPassword"
        ? style.dataInputErrornoBorder
        : style.dataInputError
      : field === "confirmPassword"
      ? style.dataInputnoBorder
      : null,
  ];

  const isPasswordField = field === "password" || field === "confirmPassword";
  const currentSecureTextEntry =
    error && isPasswordField ? false : secureTextEntry;

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
