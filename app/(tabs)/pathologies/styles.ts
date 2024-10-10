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
    height: "24%",
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: themes.colors.black,
  },
  optionContainerOne: {
    width: "90%",
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: themes.colors.gray,
  },
  optionContainersTwo: {
    width: "90%",
    height: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bntStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
