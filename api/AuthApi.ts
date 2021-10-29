import {AuthResponseType, UserData} from "./types";
import {API_URL} from "./constants";

export function fetchApi({method, userData}: { method: string, userData: UserData }): Promise<AuthResponseType> {
    const url = `${API_URL}/auth/${method}`;
    console.log("fetchApi", url, userData);
    return fetch(url, {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            username: encodeURIComponent(userData.name),
            password: encodeURIComponent(userData.password),
        }),
    }).then(
        async (response) => {
            const responseData = await response.json();
            console.log("fetchApi resposne", responseData);
            if (response.status === 200) {
                return {
                    userToken: responseData?.user?.token ?? null,
                    errorMessage: null,
                }
            }
            return {
                userToken: null,
                errorMessage: responseData?.message ?? null,
            }
        },
        (e) => {
            console.log("fetchApi error", e);
            return {
                userToken: null,
                errorMessage: null,
            }
        }
    );
}

export function register(userData: UserData): Promise<AuthResponseType> {
    try {
        return fetchApi({method: "register", userData});
    } catch {
    }
    return Promise.resolve({userToken: null, errorMessage: null});
}

export function login(userData: UserData): Promise<AuthResponseType> {
    try {
        return fetchApi({method: "login", userData});
    } catch {
    }
    return Promise.resolve({userToken: null, errorMessage: null});
}
