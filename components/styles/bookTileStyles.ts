import {StyleSheet} from "react-native";
import {normalizeSize} from "../../utils/utils";
import {colorsService} from "../../utils/colorsService";
import {borderRadius, ScreenPadding} from "../../constants/Layout";

const TILE_HEIGHT = 75;

export const bookTileStyles = StyleSheet.create({
    absolute: {position: "absolute"},
    container: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: colorsService.backgroundColor,
        width: "100%",
        paddingBottom: 8,
    },
    thumbnail: {
        alignItems: "center",
        borderRadius,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colorsService.ternaryColor,
        justifyContent: "center",
        height: TILE_HEIGHT,
        width: TILE_HEIGHT / 1.5,
    },
    infoContainer: {
        flex: 1,
        height: TILE_HEIGHT,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colorsService.ternaryColor,
        justifyContent: "center",
        marginLeft: normalizeSize({size: 12}),
    },
    titleText: {
        color: colorsService.primaryColor,
        textAlign: "left",
        fontWeight: "700",
        fontSize: normalizeSize({size: 12}),
    },
    authorText: {
        color: colorsService.secondaryColor,
        textAlign: "left",
        fontWeight: "700",
        fontSize: normalizeSize({size: 10}),
    },
});
