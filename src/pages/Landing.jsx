import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { LinearGradient } from 'expo-linear-gradient/build/LinearGradient';
import { useRoute } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native"; 

import About from './About';
import TopUsers from './TopUsers';
import UserSearch from './UserSearch';
import AppBanner from '../Components/AppBaner';

const Main = ({ navigation }) => {

    const Tab = createMaterialTopTabNavigator();

    const route = useIsFocused();
    console.log(route);

    return (
        <>
            <AppBanner />
                    <Tab.Navigator
                        screenOptions={{
                            tabBarColor: '#000000',
                            tabBarStyle: { backgroundColor: '#000000', marginBottom: Constants.statusBarHeight - 12 },
                            tabBarActiveTintColor: '#ffffff',
                            tabBarInactiveTintColor: '#ffffff',

                        }}
                        initialRouteName="UserSearch"
                        tabBarPosition='bottom'
                    >
                        <Tab.Screen name="TopUsers" component={TopUsers}
                            options={{
                                tabBarIndicatorStyle: { backgroundColor: 'red' },
                                tabBarLabel: 'Top Users',
                                tabBarPressColor: 'darkred',
                                tabBarActiveTintColor: 'grey',
                                tabBarIcon: ({ color }) => (
                                    <Ionicons name="ios-people" color={color} size={26} />
                                ),

                            }}
                        />
                        <Tab.Screen name="UserSearch" component={UserSearch}
                            options={{
                                tabBarIndicatorStyle: { backgroundColor: 'red' },
                                tabBarLabel: 'Search',
                                tabBarPressColor: 'darkred',
                                tabBarActiveTintColor: 'grey',
                                tabBarIcon: ({ color }) => (
                                    <Ionicons name="ios-search" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen name="About" component={About}
                            options={{
                                tabBarIndicatorStyle: { backgroundColor: 'red' },
                                tabBarPressColor: 'darkred',
                                tabBarLabel: 'About',
                                tabBarActiveTintColor: 'grey',
                                tabBarIcon: ({ color }) => (
                                    <Ionicons name="ios-information-circle" color={color} size={26} />
                                ),
                            }}
                        />
                    </Tab.Navigator>
        </>
    );


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
});


export default Main;