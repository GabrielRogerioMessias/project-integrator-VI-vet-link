import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";
export const style = StyleSheet.create({
  container: {
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: "100%",
    gap: 4,
  },
  title: {
    fontFamily: themes.fonts.title,
    fontSize: 20,
    color: themes.colors.darkGreen,
  },
  separator: {
    height: 1,
    backgroundColor: themes.colors.darkGreen,
  },
  descriptionContainer: {
    maxHeight: 200,
  },
  description: {
    fontFamily: themes.fonts.text,
    color: themes.colors.black,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
});
