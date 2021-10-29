import {StyleSheet} from "react-native";
import {normalizeSize} from "../../utils/utils";
import {colorsService} from "../../utils/colorsService";

const padding = normalizeSize({size: 24});

export const signInScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    infoContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: padding,
        width: "100%",
    },
    statusText: {
        textAlign: "center",
        color: colorsService.primaryColor,
        fontSize: normalizeSize({size: 12}),
        paddingVertical: normalizeSize({size: 4}),
    },
    inputContainer: {
        flex: 1,
        width: "100%",
        padding,
        paddingTop: 0,
    },
    textButtonsContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
