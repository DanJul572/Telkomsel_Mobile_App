import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, History, Help, Inbox, MyAccount, Internet } from './pages';
import { BottomTabNavigation } from './components';
import { WHITE_COLOR } from './constans';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Routes () {
    const TabNavigator = () => {
        return (
            <Tab.Navigator tabBar={props => <BottomTabNavigation {...props} />}>
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarLabel: 'Beranda' }} />
                <Tab.Screen name="History" component={History} options={{ headerShown: false, tabBarLabel: 'Riwayat' }} />
                <Tab.Screen name="Help" component={Help} options={{ headerShown: false, tabBarLabel: 'Bantuan' }} />
                <Tab.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} />
                <Tab.Screen name="Account" component={MyAccount} options={{ headerShown: false, tabBarLabel: 'Akun Saya' }} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Internet" component={Internet} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;