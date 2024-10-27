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
    fontSize: 16,
    color: themes.colors.darkGreen,
  },
  separator: {
    height: 1,
    backgroundColor: themes.colors.darkGreen,
  },
  descriptionContainer: {
    maxHeight: 400,
  },
  description: {
    fontFamily: themes.fonts.text,
    color: themes.colors.black,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
  },
  sensitiveImageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  sensitiveText: {
    textAlignVertical: "center",
    position: "absolute",
    fontSize: 16,
    fontFamily: themes.fonts.text,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
    textAlign: "center",
  },
  modalBackground: {
    width: "100%",
    height: "100%",
    backgroundColor: themes.colors.background,
  },
  fullscreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
