import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: themes.colors.background,
    width: "100%",
    height: "100%",
    paddingHorizontal: 12,
  },
  topIten: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
  },
  headerTop: {
    fontFamily: themes.fonts.title,
    fontSize: 16,
    color: themes.colors.darkGreen,
  },
  topContent: {
    alignItems: "center",
    flexDirection: "row",
    height: "15%",
    width: "100%",
    marginTop: "3%",
  },
  containerOptions: {
    width: "100%",
    height: "8%",
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  containerOptionsError: {
    width: "100%",
    height: "8%",
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: themes.colors.red,
  },
  startFdb: {
    width: "12%",
    height: "75%",
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  subTitleStyle: {
    width: "100%",
    height: "5%",
    justifyContent: "flex-end",
  },
  subTitleText: {
    fontSize: 16,
    fontFamily: themes.fonts.title,
    color: themes.colors.darkGreen,
  },
  containerInputComment: {
    width: "100%",
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    minHeight: 40,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: themes.fonts.text,
    padding: 20,
  },
  btnText: {
    fontSize: 16,
    color: themes.colors.white,
    fontFamily: themes.fonts.text,
  },
  btnArea: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerBtn: {
    width: "100%",
    height: "5%",
    backgroundColor: themes.colors.orange,
    borderRadius: 8,
    marginTop: "4%",
  },
});
