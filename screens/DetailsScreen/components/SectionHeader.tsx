import * as React from "react";
import {Text} from "react-native";
import {sectionHeaderStyles as styles} from "./styles";

type SectionHeaderProps = {
    readonly header: string;
};

export function SectionHeader({header}: SectionHeaderProps) {
    return (
        <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={styles.text}
        >
            {header}
        </Text>
    );
}
