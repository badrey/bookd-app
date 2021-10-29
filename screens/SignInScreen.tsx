import * as React from 'react';
import {ActivityIndicator, KeyboardAvoidingView, Platform, Text, View} from "react-native";
import {signInScreenStyles as styles} from "./styles/signInScreenStyles";

import {RootStackScreenProps} from '../types';
import {AccountContext} from "../contexts/AccountContext/AccountContext";
import {useSignInput} from "../hooks/useSignInput";
import {useIsMounted} from "../hooks/useIsMounted";
import {colorsService} from "../utils/colorsService";
import {SignInput} from "../components/SignInput";
import {SignButton} from "../components/SignButton";

const VOID_METHOD = () => {};

export default function SignInScreen({navigation}: RootStackScreenProps<'SignIn'>) {
    const {signIn} = React.useContext(AccountContext);
    const [name, setName, nameInputRef, focusNameInput] = useSignInput();
    const [
        password,
        setPassword,
        passwordInputRef,
        focusPasswordInput,
    ] = useSignInput();
    const {isMountedRef} = useIsMounted();
    const [showLoadingIndicator, setShowLoadingIndicator] = React.useState(false);
    const [statusMessage, setStatusMessage] = React.useState<string | null>(null);

    const onEnter = React.useCallback(async () => {
        if (!name) {
            focusNameInput();
            return;
        }
        if (!password) {
            focusPasswordInput();
            return;
        }

        setShowLoadingIndicator(true);
        try {
            const newStatusMessage = await signIn({name, password});
            setStatusMessage(newStatusMessage);
        } finally {
            setShowLoadingIndicator(false);
        }
    }, [isMountedRef, name, password, focusNameInput, focusPasswordInput, signIn]);

    const onSignUp = React.useCallback(() => {
        // @ts-ignore
        navigation.navigate("SignUp");
    }, [navigation]);

    return (
        <KeyboardAvoidingView
            {...(Platform.OS === "ios"
                ? {behavior: "padding"}
                : {behavior: "height"})}
            style={styles.container}
        >
                <View style={styles.infoContainer}>
                    {showLoadingIndicator ? (
                        <ActivityIndicator color={colorsService.primaryColor}/>
                    ) : (
                        <Text style={styles.statusText}>{statusMessage}</Text>
                    )}
                </View>
                <SignInput
                    placeholder={"Username"}
                    // @ts-ignore
                    ref={nameInputRef}
                    textContentType="username"
                    value={name}
                    onChangeText={setName}
                    onSubmit={focusPasswordInput}
                />
                <SignInput
                    isPassword={true}
                    placeholder={"Password"}
                    // @ts-ignore
                    ref={passwordInputRef}
                    textContentType="password"
                    value={password}
                    onChangeText={setPassword}
                    onSubmit={VOID_METHOD}
                />
                <SignButton text={"Sign In"} onSubmit={onEnter}/>
                <Text style={styles.statusText}>- OR -</Text>
                <SignButton text={"Register"} onSubmit={onSignUp} color={colorsService.secondaryColor}/>
        </KeyboardAvoidingView>
    );
}
