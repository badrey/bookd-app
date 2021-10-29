import * as React from "react";
import {Text, TouchableOpacity} from "react-native";
import {signButtonStyles as styles} from "./styles/signButtonStyles";
import {useSafeOnPress} from "../hooks/useSafeOnPress";

type SighButtonProps = {
    children?: React.ReactNode,
    onSubmit: () => void,
    color?: string,
    text: string,
};

export const SignButton = ({color, text, onSubmit, children}: SighButtonProps) => {
    const safeOnPress = useSafeOnPress(onSubmit);
    return (
        <TouchableOpacity
            style={[styles.touchable, color ? {backgroundColor: color} : null]}
            onLongPress={safeOnPress}
            onPress={safeOnPress}
        >
            {!children && <Text style={styles.text}>{text.toUpperCase()}</Text>}
            {!!children && children}
        </TouchableOpacity>
    );
};
