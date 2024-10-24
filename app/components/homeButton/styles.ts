import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: themes.colors.white,
    borderColor: themes.colors.gray,
    borderWidth: 1,
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    gap: 12,
  },
  text: {
    fontFamily: themes.fonts.text,
    fontSize: 20,
  },
});
