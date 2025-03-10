import { Animated, Easing, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themes.colors.background,
    width: "100%",
    paddingHorizontal: 12,
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
  },
  menuContent: {
    backgroundColor: themes.colors.white,
    width: "60%",
    height: "100%",
  },
  topContent: {
    backgroundColor: themes.colors.lightGreen,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 80,
    gap: 8,
  },
  botContent: {
    padding: 12,
    gap: 8,
  },
  menuTitleContent: {
    flexDirection: "row",
  },
  menuMiniTitle: {
    fontSize: 20,
    fontFamily: themes.fonts.title,
    color: themes.colors.red,
  },
  menuBigTitle: {
    fontSize: 24,
    fontFamily: themes.fonts.title,
    color: themes.colors.yellow,
  },
  exitBtn: {
    flexDirection: "row",
    gap: 4,
  },
  exitText: {
    color: themes.colors.white,
    fontFamily: themes.fonts.text,
  },
  menuItem: {
    flexDirection: "row",
    gap: 4,
  },
  menuText: {
    fontSize: 18,
    fontFamily: themes.fonts.text,
  },

  icon: {
    fontSize: 20,
    color: themes.colors.black,
  },
  exitIcon: {
    fontSize: 20,
    color: themes.colors.white,
  },
});

export const createAnimation = (toValue: number, duration: number) => {
  return {
    toValue,
    duration,
    easing: Easing.ease,
    useNativeDriver: true,
  };
};

export const slideInAnimation = (slideAnim: Animated.Value) => {
  return Animated.timing(slideAnim, createAnimation(0, 300));
};

export const slideOutAnimation = (slideAnim: Animated.Value) => {
  return Animated.timing(slideAnim, createAnimation(-300, 300));
};

export const fadeInAnimation = (opacityAnim: Animated.Value) => {
  return Animated.timing(opacityAnim, createAnimation(1, 300));
};

export const fadeOutAnimation = (opacityAnim: Animated.Value) => {
  return Animated.timing(opacityAnim, createAnimation(0, 300));
};
