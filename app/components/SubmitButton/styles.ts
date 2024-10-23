import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";
export const style = StyleSheet.create({
  registerBtn: {
    paddingVertical: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: themes.colors.orange,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    color: themes.colors.white,
    fontFamily: themes.fonts.text,
  },
});
