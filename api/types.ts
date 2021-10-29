export type UserData = {
    name: string,
    password: string,
}

export type AuthResponseType = {
    userToken: string | null,
    errorMessage: string | null;
};

export type BookType = Readonly<{
    title: string,
    author: string,
    coverImageUrl: string,
    id: string,
    pageCount: null,
    publisher: string,
    synopsis: string,
}>;

export type BooksResponseType = {
    books: Readonly<BookType[]>,
};
