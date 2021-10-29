import {StyleSheet} from "react-native";
import {colorsService} from "../../utils/colorsService";
import {borderRadius, ScreenPadding, windowWidth} from "../../constants/Layout";

const THUMBNAIL_WIDTH = (windowWidth - ScreenPadding * 3) / 2;

export const titleDetailsSceneStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorsService.backgroundColor,
    },
    contentContainer: {
        padding: ScreenPadding
    },
    subContainer: {
        flexDirection: "row",
    },
    detailsContainer: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: ScreenPadding,
    },
    thumbnail: {
        alignItems: "center",
        borderRadius,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colorsService.ternaryColor,
        justifyContent: "center",
        height: THUMBNAIL_WIDTH * 1.5,
        width: THUMBNAIL_WIDTH,
    },
});
