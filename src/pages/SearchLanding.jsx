import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import MainStats from './MainStats';

const SearchLanding = (props) => {

    const Tab = createMaterialTopTabNavigator();
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarColor: '#000000',
                    tabBarLabelStyle: { color: '#ffffff' },
                    tabBarStyle: { backgroundColor: '#000000' },
                    tabBarActiveTintColor: '#ffffff',
                    tabBarInactiveTintColor: '#ffffff',
                    tabBarAccessibilityLabel: 'Main',
                }}
                initialRouteName="MainStats"
                tabBarPosition='bottom'
            >
                <Tab.Screen name="Maps"
                    options={{
                        tabBarIndicatorStyle: { backgroundColor: 'red' },
                        tabBarLabel: 'Maps',
                        tabBarPressColor: 'darkred',
                        tabBarActiveTintColor: 'lightblue',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="map-o" size={24} color="white" />
                        ),
                    }}
                    children={() => <></>}
                />
                <Tab.Screen name="MainStats"
                    options={{
                        tabBarIndicatorStyle: { backgroundColor: 'red' },
                        tabBarLabel: 'Main',
                        tabBarPressColor: 'darkred',
                        tabBarActiveTintColor: 'lightblue',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="home" size={24} color="white" />
                        ),
                    }}
                    children={() => <MainStats {...props} />}
                />
                <Tab.Screen name="Weapons"
                    options={{
                        tabBarIndicatorStyle: { backgroundColor: 'red' },
                        tabBarLabel: 'Weapons',
                        tabBarPressColor: 'darkred',
                        tabBarActiveTintColor: 'lightblue',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="pistol" size={24} color="white" />
                        ),
                    }}
                    children={() => <></>}
                />
            </Tab.Navigator>
        </>
    );
};

export default SearchLanding;