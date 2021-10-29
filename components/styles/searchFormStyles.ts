import {StyleSheet} from "react-native";
import {normalizeSize} from "../../utils/utils";
import {colorsService} from "../../utils/colorsService";
import {borderRadius, ScreenPadding} from "../../constants/Layout";

export const searchFormStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: normalizeSize({size: 48}),
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: colorsService.ternaryColor,
        paddingHorizontal: ScreenPadding,
        marginVertical: ScreenPadding,
        borderRadius,
        borderColor: colorsService.primaryColor,
    },
    input: {
        flex: 1,
        paddingHorizontal: normalizeSize({size: 4}),
        fontSize: normalizeSize({size: 12}),
        color: colorsService.primaryColor,
    },
});
