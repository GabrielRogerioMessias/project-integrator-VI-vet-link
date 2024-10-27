import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.background,
    width: "100%",
    paddingHorizontal: 12,
    gap: 20,
    paddingBottom: 20,
  },
});
