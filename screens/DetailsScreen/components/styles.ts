import {StyleSheet} from "react-native";
import {normalizeSize} from "../../../utils/utils";
import {colorsService} from "../../../utils/colorsService";

export const bookDetailStyles = StyleSheet.create({
    valueText: {
        color: colorsService.primaryColor,
        textAlign: "left",
        fontSize: normalizeSize({size: 12}),
        padding: normalizeSize({size: 1.5}),
    },
    headerText: {
        color: colorsService.primaryColor,
        textAlign: "left",
        fontWeight: "bold",
        fontSize: normalizeSize({size: 12}),
    },
});

export const bookDescriptionSectionStyles = StyleSheet.create({
    container: {
        width: "100%",
        paddingVertical: 8,
    },
    descriptionText: {
        color: colorsService.primaryColor,
        textAlign: "left",
        fontSize: normalizeSize({size: 12}),
    },
});


export const sectionHeaderStyles = StyleSheet.create({
    container: {
        paddingBottom: normalizeSize({size: 8}),
    },
    text: {
        color: colorsService.primaryColor,
        textAlign: "left",
        fontWeight: "bold",
        fontSize: normalizeSize({size: 16}),
    },
});
