import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    Home,
    History,
    Help,
    Inbox,
    MyAccount,
    Internet,
    Search,
    Welcome,
    Login,
} from './pages';
import {BottomTabNavigation} from './components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function getBottomTabNavigation(props: any) {
    return <BottomTabNavigation {...props} />;
}

function TabNavigator() {
    return (
        <Tab.Navigator
            tabBar={props => getBottomTabNavigation(props)}
            initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={Home}
                options={{headerShown: false, tabBarLabel: 'Beranda'}}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{headerShown: false, tabBarLabel: 'Riwayat'}}
            />
            <Tab.Screen
                name="Help"
                component={Help}
                options={{headerShown: false, tabBarLabel: 'Bantuan'}}
            />
            <Tab.Screen
                name="Inbox"
                component={Inbox}
                options={{headerShown: false}}
            />
            <Tab.Screen
                name="Account"
                component={MyAccount}
                options={{headerShown: false, tabBarLabel: 'Akun Saya'}}
            />
        </Tab.Navigator>
    );
}

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Tab"
                    component={TabNavigator}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Internet"
                    component={Internet}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
