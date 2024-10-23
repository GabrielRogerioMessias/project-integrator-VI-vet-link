import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: themes.colors.background,
    width: "100%",
    paddingHorizontal: 12,
    gap: 20,
  },
  mainContent: {
    width: "100%",
    gap: 8,
  },
  registerContainer: {
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 4,
  },
  infoText: {
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: themes.colors.gray,
  },
});
