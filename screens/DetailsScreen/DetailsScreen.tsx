import * as React from "react";
import {Image, ScrollView, View} from "react-native";
import {titleDetailsSceneStyles as styles} from "./styles";
import {useRoute} from "@react-navigation/native";
import {BookType} from "../../api/types";
import {BookDescriptionSection} from "./components/BookDescriptionSection";
import {sharedStyles} from "./components/styles";
import {SectionHeader} from "./components/SectionHeader";
import {BookDetail} from "./components/BookDetail";

export const DetailsScreenBase = ({book}: { book: BookType | null }) => {
    if (!book) {
        return null;
    }
    return (
        <ScrollView
            contentContainerStyle={styles.contentContainer}
            style={styles.container}
        >
            <>
                <View style={styles.subContainer}>
                    <Image
                        source={{uri: book.coverImageUrl}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.detailsContainer}>
                        <BookDetail header="Title" value={book.title}/>
                        <BookDetail header="Author" value={book.author}/>
                        <BookDetail header="Publisher" value={book.publisher}/>
                        <BookDetail header="Page count" value={String(book.pageCount)}/>
                    </View>
                </View>
                <BookDescriptionSection
                    book={book}
                />
            </>
        </ScrollView>
    );
};

export const DetailsScreen = React.memo<{}>(() => {
        const route = useRoute();
        // @ts-ignore
        return <DetailsScreenBase book={route.params?.book ?? {}}/>;
    }
);
