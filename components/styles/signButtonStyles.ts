/* @flow */
import {StyleSheet} from "react-native";
import {normalizeSize} from "../../utils/utils";
import {borderRadius, ScreenPadding} from "../../constants/Layout";
import {colorsService} from "../../utils/colorsService";

export const connectButtonPadding = normalizeSize({size: 8});
export const connectButtonHeight = 24 + connectButtonPadding * 2;

export const signButtonStyles = StyleSheet.create({
    touchable: {
        alignItems: "center",
        backgroundColor: colorsService.blueDarkColor,
        borderRadius,
        height: connectButtonHeight,
        justifyContent: "center",
        marginVertical: ScreenPadding / 2,
        width: "100%",
    },
    info: {
        backgroundColor: colorsService.secondaryColor,
        borderColor: colorsService.secondaryColor,
    },
    text: {
        color: colorsService.backgroundColor,
        fontSize: normalizeSize({size: 12}),
        fontWeight: "bold",
        padding: normalizeSize({size: 2}),
    },
});
