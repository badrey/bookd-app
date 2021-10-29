import * as React from "react";
import {UserData} from "../../api/types";

export type AccountContextState = {
    userToken: string | null,
    isLoading: boolean,
};

export type AccountContextType = {
    signIn: (userData: UserData) => Promise<string | null>,
    signUp: (userData: UserData) => Promise<string | null>
} & AccountContextState;

export type AccountContextPropsType = {
    children: React.ReactNode,
}

export type AccountContextActionType = {
    type: "RESTORE_TOKEN" | "SIGN_IN";
    token: string | null,
}
