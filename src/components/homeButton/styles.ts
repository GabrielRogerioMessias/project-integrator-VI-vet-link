import { StyleSheet } from "react-native"
import { themes } from "../../global/themes"

export const style = StyleSheet.create({
    button: {
        borderRadius: 4,
        backgroundColor: themes.colors.white,
        borderColor: themes.colors.gray,
        borderWidth:1
    },
    container: {
        width: 166,
        height: 166,
        alignItems: "center",
        justifyContent: "center",
        gap: 12
    },
    image: {
        width: 50,
        height: 50,
      
    },
    text: {
        fontFamily: themes.fonts.text,
        fontSize: 14,
    }
})