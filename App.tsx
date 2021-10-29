import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation';
import {AccountContext, AccountContextProvider} from "./contexts/AccountContext/AccountContext";
import * as SplashScreen from "expo-splash-screen";

function DynamicApp() {
    const {isLoading} = React.useContext(AccountContext);
    React.useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);
    React.useEffect(() => {
        if (!isLoading) {
            SplashScreen.hideAsync();
        }
    }, [isLoading]);
    if (isLoading) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Navigation />
                <StatusBar/>
            </SafeAreaProvider>
        );
    }
}

export default function App() {
    return (
        <AccountContextProvider>
            <DynamicApp/>
        </AccountContextProvider>
    );
}
