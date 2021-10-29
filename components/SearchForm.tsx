import * as React from "react";
import {TextInput, View} from "react-native";
import {searchFormStyles as styles} from "./styles/searchFormStyles";
import {colorsService} from "../utils/colorsService";

type SearchFormProps = {
    onChangeText: (value: string) => void,
    placeholder: string,
    searchValue: string,
};

export const SearchForm = ({
                               searchValue,
                               placeholder,
                               onChangeText
                           }: SearchFormProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                allowFontScaling={true}
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={32}
                placeholder={placeholder}
                placeholderTextColor={colorsService.secondaryColor}
                returnKeyType="search"
                style={styles.input}
                value={searchValue}
                onChangeText={onChangeText}
            />
        </View>
    );
}
