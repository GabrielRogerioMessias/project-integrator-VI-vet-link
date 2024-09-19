import { StyleSheet } from "react-native"
import { themes } from "../../global/themes"

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themes.colors.background,
        width: "100%"
    },
    content: {
        height: "80%",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 16,
        fontFamily: themes.fonts.title,
        color: themes.colors.darkGreen,
        marginBottom: 20
    },
    buttonsContainer: {
        flexDirection: 'column',
        gap: 4
    },
    row1: {
        flexDirection: 'row',
        gap: 4
    },
    row2: {
        flexDirection: 'row',
        gap: 4
    }
})