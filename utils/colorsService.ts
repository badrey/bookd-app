import {COLORS} from "../constants/Colors";

class ColorsService {
    get primaryColor() {
        return COLORS.TUNA;
    }

    get secondaryColor() {
        return COLORS.RAVEN;
    }

    get secondaryFadedColor() {
        return COLORS.SCARPA_FLOW;
    }

    get ternaryColor() {
        return COLORS.BOMBAY;
    }

    get backgroundColor() {
        return COLORS.BACKGROUND;
    }

    get backgroundOpacityColor() {
        return COLORS.BACKGROUND_LIGHT_OPACITY;
    }

    get backgroundReverseOpacityColor() {
        return COLORS.BACKGROUND_LIGHT_REVERSE_OPACITY;
    }

    get redColor() {
        return COLORS.RED;
    }

    get goldenColor() {
        return COLORS.GOLD;
    }

    get blueLightColor() {
        return COLORS.BLUE;
    }

    get blueDarkColor() {
        return COLORS.BLUE_LIGHT;
    }
}

const colorsService = new ColorsService();
export {colorsService};
