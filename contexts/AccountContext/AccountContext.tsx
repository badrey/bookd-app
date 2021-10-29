import * as React from "react";
import * as SecureStore from "expo-secure-store";
import {AccountContextActionType, AccountContextPropsType, AccountContextState, AccountContextType} from "./types";
import {UserData} from "../../api/types";
import {login, register} from "../../api/AuthApi";

const defaultAccountContextState = {
    userToken: null,
    isLoading: false,
};

const defaultAccountContext: AccountContextType = {
    ...defaultAccountContextState,
    signIn: () => Promise.resolve(null),
    signUp: () => Promise.resolve(null),
};

export const AccountContext = React.createContext<AccountContextType>(defaultAccountContext);

const USER_TOKEN_KEY = "userToken";

export function AccountContextProvider({children}: AccountContextPropsType) {
    const [state, dispatch] = React.useReducer<(prevState: AccountContextState, action: AccountContextActionType) => AccountContextState>(
        (prevState: AccountContextState, action: AccountContextActionType) => {
            switch (action.type) {
                case "RESTORE_TOKEN":
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case "SIGN_IN":
                    return {
                        ...prevState,
                        userToken: action.token,
                    };
            }
        },
        defaultAccountContextState,
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            try {
                const userToken = await SecureStore.getItemAsync(USER_TOKEN_KEY);
                dispatch({type: "RESTORE_TOKEN", token: userToken});
            } catch (e) {
                dispatch({type: "RESTORE_TOKEN", token: null});
            }
        };

        bootstrapAsync();
    }, []);

    React.useEffect(() => {
        if (!!state.userToken) {
            SecureStore.setItemAsync(USER_TOKEN_KEY, state.userToken);
        }
    }, [state.userToken]);

    const signIn = React.useCallback(async (userData: UserData) => {
        const response = await login(userData);
        dispatch({type: "SIGN_IN", token: response.userToken});
        return response.errorMessage;
    }, []);
    const signUp = React.useCallback(async (userData: UserData) => {
        const response = await register(userData);
        dispatch({type: "SIGN_IN", token: response.userToken});
        return response.errorMessage;
    }, []);

    return <AccountContext.Provider value={{...state, signIn, signUp}}>{children}</AccountContext.Provider>;
}
