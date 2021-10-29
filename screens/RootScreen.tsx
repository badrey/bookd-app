import * as React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {rootScreenStyles as styles} from "./styles/rootScreenStyles";
import {getBooks} from "../api/BookApi";
import {AccountContext} from "../contexts/AccountContext/AccountContext";
import {BookType} from "../api/types";
import {SearchForm} from "../components/SearchForm";
import {BooksList} from "../components/BooksList";
import {colorsService} from "../utils/colorsService";
import {useNavigation} from "@react-navigation/native";

export default function RootScreen() {
    const {userToken} = React.useContext(AccountContext);
    const [searchValue, setSearchValue] = React.useState("");
    const [books, setBooks] = React.useState<Readonly<BookType[]>>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchBooks = async () => {
            if (userToken) {
                setIsLoading(true);
                try {
                    const {books: newBooks} = await getBooks({searchValue, userToken});
                    setBooks(newBooks);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchBooks();
    }, [searchValue, userToken]);

    const navigation = useNavigation();
    const onBookSelected = React.useCallback((book: BookType) => {
        // @ts-ignore
        navigation.navigate("Details", {book});
    }, [navigation]);

    return (
        <View style={styles.container}>
            <SearchForm searchValue={searchValue} onChangeText={setSearchValue} placeholder={"Search books..."} />
            {isLoading && <ActivityIndicator color={colorsService.primaryColor}/>}
            <BooksList books={books} onBookSelected={onBookSelected} />
        </View>
    );
}
