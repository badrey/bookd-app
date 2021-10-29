import * as React from "react";
import {TextInput} from "react-native";
import {signInputStyles as styles} from "./styles/signInputStyles";
import {colorsService} from "../utils/colorsService";

type SignInputProps = {
    isPassword?: boolean,
    onChangeText: (text: string) => void,
    onClearInput?: () => void,
    onEndEditing?: () => void,
    onSubmit: () => void,
    placeholder: string,
    textContentType: 'username' | 'password',
    value?: string,
};

export const SignInput = React.forwardRef<
    TextInput,
    SignInputProps
>((props: SignInputProps, ref: React.Ref<TextInput>) => {
    const [borderStyle, setBorderStyle] = React.useState(styles.blurred);

    const {
        placeholder,
        isPassword,
        value,
        onChangeText,
        onSubmit,
        textContentType,
    } = props;

    return (
        <TextInput
            allowFontScaling={true}
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            maxLength={128}
            placeholder={placeholder}
            placeholderTextColor={colorsService.secondaryColor}
            ref={ref}
            returnKeyType="next"
            secureTextEntry={isPassword}
            style={[styles.input, borderStyle]}
            textContentType={textContentType}
            value={value}
            onBlur={() => {
                setBorderStyle(styles.blurred);
            }}
            onChangeText={onChangeText}
            onFocus={() => {
                setBorderStyle(styles.focused);
            }}
            onSubmitEditing={onSubmit}
        />
    );
});
