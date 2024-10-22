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
  headerText: {
    fontSize: 20,
    color: themes.colors.darkGreen,
    fontFamily: themes.fonts.title,
  },
  infoText: {
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: themes.colors.gray,
  },
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
