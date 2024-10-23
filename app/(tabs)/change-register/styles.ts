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
  alterContainer: {
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 4,
  },

  inputStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: themes.fonts.text,
    height: "100%",
  },
  saveBtn: {
    marginTop: "2%",
    width: "100%",
    height: "5%",
    backgroundColor: themes.colors.orange,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontSize: 20,
    fontFamily: themes.fonts.text,
    color: themes.colors.white,
  },
});
