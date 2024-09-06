import { StyleSheet } from "react-native"
import { themes } from "../../global/themes";
export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: themes.colors.background,
        width: "100%",
        paddingHorizontal: 12
    },
    topContent: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: "row",
        height: "14%",
        width: "100%"
    },
    topIten: {
        width: "60%",
        justifyContent: "flex-start",
        marginLeft: "7%"

    },
    topItenI: {
        marginRight: "30%",
        justifyContent: "flex-start",
    },
    headerText: {
        fontSize: 20,
        color: themes.colors.darkGreen,
        fontFamily: themes.fonts.title,
        fontWeight: "bold"
    },
    headerContent: {
        width: "100%",
        marginBottom: 5,
    },
    infoText: {
        fontSize: 16,
        fontFamily: themes.fonts.text,
        color: themes.colors.gray,
    },
    registerContainer: {
        height: "30%",
        width: "99%",
        backgroundColor: themes.colors.white,
        borderRadius: 12
    },
    inputContent: {
        margin: "4%",
        justifyContent: "space-between",
        flex: 1
    },
    dataInput: {
        height: "15%",
        borderBottomWidth: 1,
        borderBlockColor: themes.colors.gray,
        marginTop: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 16,
        fontFamily: themes.fonts.text,
        fontWeight: "regular"
    },
    registerBtn: {
        height: "6%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: themes.colors.orange,
        borderRadius: 8,
        marginTop: "4%"
    },
    btnText: {
        fontSize: 16,
        color: themes.colors.white
    }

})