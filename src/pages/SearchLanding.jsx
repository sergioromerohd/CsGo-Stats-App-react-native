import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';


import MainStats from './stats/MainStats';
import Inv from './stats/Inv';
import Maps from './stats/MapsStats';
import Weapon from './stats/Weapon';

const SearchLanding = (props) => {

    const Tab = createMaterialTopTabNavigator();
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarColor: '#000000',
                    tabBarLabelStyle: { color: '#ffffff' },
                    tabBarStyle: { backgroundColor: '#000000',marginBottom:(Constants.statusBarHeight-12)},
                    tabBarActiveTintColor: '#f0f0f0',
                    tabBarInactiveTintColor: '#f0f0f0',
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
                        tabBarActiveTintColor: 'grey',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="map-o" size={24} color="white" />
                        ),
                    }}
                    children={() => <Maps {...props} /> }
                />
                <Tab.Screen name="MainStats"
                    options={{
                        tabBarIndicatorStyle: { backgroundColor: 'red' },
                        tabBarLabel: 'Main',
                        tabBarPressColor: 'darkred',
                        tabBarActiveTintColor: 'grey',
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
                        tabBarActiveTintColor: 'grey',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="pistol" size={24} color="white" />
                        ),
                    }}
                    children={() => <Weapon {...props} /> }
                />
                <Tab.Screen name="Inventory"
                    options={{
                        tabBarIndicatorStyle: { backgroundColor: 'red' },
                        tabBarLabel: 'Inv',
                        tabBarPressColor: 'darkred',
                        tabBarActiveTintColor: 'grey',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="inventory" size={24} color="white" />
                        ),
                    }}
                    children={() => <Inv {...props} /> }
                />
            </Tab.Navigator>
        </>
    );
};

export default SearchLanding;