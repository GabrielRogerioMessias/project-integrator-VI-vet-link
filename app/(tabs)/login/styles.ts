import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";

const screenHeight = Dimensions.get("window").height;
const oneThirdHeight = Math.floor(screenHeight / 3);

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.lightGreen,
    width: "100%",
    paddingHorizontal: 12,
  },
  topContent: {
    height: oneThirdHeight,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  smallText: {
    fontSize: 24,
    color: themes.colors.red,
    fontFamily: themes.fonts.title,
  },
  bigText: {
    fontSize: 32,
    color: themes.colors.yellow,
    fontFamily: themes.fonts.title,
  },
  midContent: {
    height: oneThirdHeight,
    width: "100%",
    gap: 20,
  },
  data: {
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: themes.colors.white,
  },
  boxInput: {
    width: "100%",
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: themes.colors.darkGreen,
    flexDirection: "row",
    paddingHorizontal: 12,
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: themes.colors.darkGreen,
  },
  input: {
    width: "86%",
    padding: 8,
    fontSize: 16,
    fontFamily: themes.fonts.text,
  },
  lostPasswordContainer: {
    alignSelf: "flex-end",
    paddingTop: 4,
  },
  lostPassword: {
    fontFamily: themes.fonts.text,
    fontSize: 12,
    color: themes.colors.white,
    textDecorationLine: "underline",
  },
  botContent: {
    height: oneThirdHeight,
    width: "100%",
    alignItems: "center",
    gap: 12,
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: themes.colors.darkGreen,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  signupContent: {
    gap: 4,
    width: "100%",
    alignItems: "center",
  },
  signupBtn: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: themes.colors.red,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: themes.colors.white,
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: themes.colors.gray,
  },
  signupText: {
    fontSize: 12,
    fontFamily: themes.fonts.text,
    color: themes.colors.white,
  },
});
