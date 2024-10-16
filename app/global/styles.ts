import { StyleSheet } from "react-native";
import { themes } from "./themes";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontFamily: themes.fonts.text,
    paddingHorizontal: 12,
  },
});
