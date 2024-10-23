import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";
export const style = StyleSheet.create({
  dataInput: {
    borderBottomWidth: 1,
    borderBlockColor: themes.colors.gray,
  },
  dataInputnoBorder: {
    borderBlockColor: themes.colors.gray,
  },
  dataInputError: {
    borderBottomWidth: 1,
    borderBlockColor: themes.colors.red,
  },
  dataInputErrornoBorder: {
    borderBlockColor: themes.colors.red,
  },
  inputStyle: {
    fontSize: 16,
    fontFamily: themes.fonts.text,
  },
  errorText: {
    color: themes.colors.red,
    fontSize: 12,
  },
});
