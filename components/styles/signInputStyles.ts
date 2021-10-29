import {StyleSheet} from "react-native";
import {colorsService} from "../../utils/colorsService";
import {borderRadius} from "../../constants/Layout";
import {normalizeSize} from "../../utils/utils";

export const signInputStyles = StyleSheet.create({
    focused: {
        borderColor: colorsService.secondaryColor,
        borderWidth: StyleSheet.hairlineWidth * 2,
    },
    blurred: {
        borderWidth: 0,
    },
    input: {
        backgroundColor: colorsService.ternaryColor,
        borderRadius,
        color: colorsService.primaryColor,
        fontSize: normalizeSize({size: 12}),
        marginBottom: normalizeSize({size: 12}),
        padding: normalizeSize({size: 4}),
        width: "100%",
    },
});
