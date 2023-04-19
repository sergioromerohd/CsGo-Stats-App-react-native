import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

const LandingNav = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('TopUsers')}>
                    <MaterialIcons name="leaderboard" size={26} color="white"/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Landing')}>
                    <AntDesign name="home" size={26} color="white"/>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('About')}>
                    <Feather name="info" size={26} color="white"/>
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
        height: '12%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

});

export default LandingNav;