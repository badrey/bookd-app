import * as React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {bookTileStyles as styles} from "./styles/bookTileStyles";
import {BookType} from "../api/types";
import {useSafeOnPress} from "../hooks/useSafeOnPress";

type Props = {
    onBookSelected: (book: BookType) => void;
    book: BookType;
};

export const BookTile = React.memo<Props>(({book, onBookSelected}: Props) => {
    const onPress = React.useCallback(() => {
        onBookSelected(book);
    }, [book, onBookSelected]);
    const safeOnPress = useSafeOnPress(onPress);
    const {title, author, coverImageUrl} = book;
    return (
        <TouchableOpacity
            accessible
            style={styles.container}
            onPress={safeOnPress}
        >
            <View style={styles.container}>
                <Image
                    source={{uri: coverImageUrl}}
                    style={styles.thumbnail}
                />
                <View style={styles.infoContainer}>
                    <Text ellipsizeMode="tail" numberOfLines={3} style={styles.titleText}>
                        {title}
                    </Text>
                    <Text ellipsizeMode="tail" numberOfLines={3} style={styles.authorText}>
                        {author}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
});
