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
  starsContainer: {
    width: "100%",
    gap: 4,
  },
  starsContent: {
    paddingVertical: 12,
    gap: 12,
    backgroundColor: themes.colors.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  starsContentError: {
    borderWidth: 1,
    borderColor: themes.colors.red,
  },

  errorText: {
    textAlign: "center",
    color: themes.colors.red,
    fontFamily: themes.fonts.text,
  },
  subTitleText: {
    fontSize: 16,
    fontFamily: themes.fonts.title,
    color: themes.colors.darkGreen,
  },
  containerComment: {
    width: "100%",
    gap: 4,
  },
  textInput: {
    borderRadius: 12,
    backgroundColor: themes.colors.white,
    flexWrap: "wrap",
    fontSize: 16,
    fontFamily: themes.fonts.text,
    padding: 20,
    textAlignVertical: "top",
  },
});
