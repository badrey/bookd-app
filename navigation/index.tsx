/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import RootScreen from '../screens/RootScreen';
import {RootStackParamList} from '../types';
import {AccountContext} from "../contexts/AccountContext/AccountContext";
import SignInScreen from "../screens/SignInScreen";
import SignUnScreen from "../screens/SignUnScreen";
import {DetailsScreen} from "../screens/DetailsScreen/DetailsScreen";

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const {userToken} = React.useContext(AccountContext);
    return (
        <Stack.Navigator>
            {!!userToken ? <>
                <Stack.Screen name="Root" component={RootScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Details" component={DetailsScreen} options={{title: "Details"}}/>
            </> : <>
                <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUnScreen} options={{title: "Register"}}/>
            </>}
        </Stack.Navigator>
    );
}
