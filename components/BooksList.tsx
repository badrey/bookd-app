import * as React from "react";
import {FlatList} from "react-native";
import {booksListStyles as styles} from "./styles/booksListStyles";
import {BookType} from "../api/types";
import {BookTile} from "./BookTile";

type TitlesListProps = {
    onBookSelected: (arg: BookType) => void;
    books: Readonly<BookType[]>;
};

export function BooksList({books, onBookSelected}: TitlesListProps) {
    const renderBook = React.useCallback(({item: book}: { item: BookType }) => {
        return (
            <BookTile key={book.id} book={book} onBookSelected={onBookSelected}/>
        );
    }, [onBookSelected]);

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={books}
            renderItem={renderBook}
            style={styles.container}
        />
    );
}
