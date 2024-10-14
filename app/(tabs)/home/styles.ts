import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.background,
    width: "100%",
  },
  content: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 16,
    fontFamily: themes.fonts.title,
    color: themes.colors.darkGreen,
    marginBottom: 20,
  },
  buttonsContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 14.5,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Parte escura
    justifyContent: "center",
    alignItems: "flex-start",
  },
  modalContent: {
    width: "60%",
    height: "100%",
    backgroundColor: "#FFF",
    padding: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
    color: "#000",
  },
  menuButton: {
    fontSize: 18,
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});

export const menuStyles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
  },
  menuContent: {
    backgroundColor: themes.colors.background,
    padding: 20,
    width: "80%",
    height: "100%",
  },
  menuTitle: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: themes.fonts.title,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: themes.fonts.text,
  },
});
