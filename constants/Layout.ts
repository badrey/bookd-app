import {Dimensions} from "react-native";

export const ScreenPadding = 16;
export const borderRadius = 8;
const {height, width} = Dimensions.get("window");
export const windowHeight = Math.max(height, width);
export const windowWidth = Math.min(height, width);
