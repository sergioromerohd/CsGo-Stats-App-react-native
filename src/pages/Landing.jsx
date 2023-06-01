import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import About from './About';
import TopUsers from './TopUsers';
import UserSearch from './UserSearch';
import AppBanner from '../Components/AppBaner';

const Main = ({ navigation }) => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <>
            <AppBanner />
            <Tab.Navigator
                scrollEnabled={true}
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

export default Main;