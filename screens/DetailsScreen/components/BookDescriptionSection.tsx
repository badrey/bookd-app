import * as React from "react";
import {Text, View} from "react-native";
import {bookDescriptionSectionStyles as styles} from "./styles";
import {SectionHeader} from "./SectionHeader";
import {BookType} from "../../../api/types";

type Props = {
    book: BookType;
};

export function BookDescriptionSection({book: {synopsis: description}}: Props) {
        if (!description) {
            return null;
        }
        return (
            <View
                style={styles.container}
            >
                <SectionHeader header="Description" />
                <Text
                    style={styles.descriptionText}
                >
                    {description}
                </Text>
            </View>
        );
}
