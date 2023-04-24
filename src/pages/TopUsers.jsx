//pagina de about
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import LandingNav from '../Components/LandinNav';
import fetchData from '../api/TopUserStats.js';
import AppBanner from '../Components/AppBaner';


const TopUsers = ({ navigation }) => {

    const [data, setData] = useState(null);

    const fetchDataOnce = async () => {
        fetchData().then((data) => {
            setData(data);
        });
    };

    useEffect(() => {
        fetchDataOnce();
    }, []);

    return (
        <>
            <AppBanner />
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Landing')}>
                    <AntDesign name="left" size={24} color="black" />
                </Pressable>
                <Text style={styles.text}>Top Users</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },
});

export default TopUsers;
