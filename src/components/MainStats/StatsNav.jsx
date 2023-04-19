import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const StatsNav = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('TopUsers')}>
                    <FontAwesome name="map-o" size={24} color="white" />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Landing')}>
                    <FontAwesome name="home" size={24} color="white" />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('About')}>
                    <MaterialCommunityIcons name="pistol" size={24} color="white" />
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        left: 0,
        right: 0,
        height: '8%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

});

export default StatsNav;