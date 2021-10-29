import {BooksResponseType} from "./types";
import {API_URL} from "./constants";

export function fetchApi({searchValue, userToken}: { searchValue: string, userToken: string }): Promise<BooksResponseType> {
    const url = `${API_URL}/books?q=${encodeURIComponent(searchValue)}`;
    console.log("fetchApi", url, userToken);
    return fetch(url, {
        headers: {
            "Authorization": `Bearer ${userToken}`
        },
        method: "GET",
    }).then(
        async (response) => {
            return response.json();
        },
        (e) => {
            console.log("fetchApi error", e);
            return {
                books: [],
            }
        }
    );
}

export function getBooks({searchValue, userToken}: { searchValue: string, userToken: string }): Promise<BooksResponseType> {
    try {
        return fetchApi({searchValue, userToken});
    } catch {
    }
    return Promise.resolve({books: []});
}
