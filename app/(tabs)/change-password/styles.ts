import { StyleSheet } from "react-native"
import { themes } from "../../global/themes"
export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
        width: "100%",
        alignItems: 'center',
        paddingHorizontal: 12
    },
    topContent: {
        alignItems: "center",
        flexDirection: "row",
        height: "14%",
        width: "100%",
        marginTop: "3%"
    },
    topIten: {
        position: "absolute",
        width: "100%",
        alignItems: "center"
    },
    headerText: {
        fontSize: 16,
        fontFamily: themes.fonts.title,
        color: themes.colors.darkGreen
    },
    alterContainer: {
        backgroundColor: themes.colors.white,
        width: "100%",
        height: "20%",
        borderRadius: 12,
        alignItems: "center"
    },
    alterInputContainer: {
        width: "98%",
        height: "90%",
        alignItems: "center",
        justifyContent: "space-between",

    },
    dataInput: {
        marginTop: "3%",
        width: "90%",
        height: "25%",
        borderBottomWidth: 1,
        borderBlockColor: themes.colors.gray,
    },
    dataInputError: {
        marginTop: "3%",
        width: "90%",
        height: "25%",
        borderBottomWidth: 1,
        borderBlockColor: themes.colors.red,
    },
    inputStyle: {
        flex: 1,
        fontSize: 16,
        fontFamily: themes.fonts.text,
        fontWeight: "regular",
    },
    saveBtn: {
        marginTop: "2%",
        width: "100%",
        height: "5%",
        backgroundColor: themes.colors.orange,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    textBtn: {
        fontSize: 20,
        fontFamily: themes.fonts.text,
        color: themes.colors.white
    }

})