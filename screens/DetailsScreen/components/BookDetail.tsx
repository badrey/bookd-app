import * as React from "react";
import {Text} from "react-native";
import {bookDetailStyles as styles} from "./styles";

type Props = {
    header: string;
    value: string;
};

export function BookDetail({header, value}: Props) {
    return (
        <Text style={styles.valueText}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.headerText}>
                {header}:{" "}
            </Text>
            {value}
        </Text>
    );
}
