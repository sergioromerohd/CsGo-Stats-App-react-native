//pagina de about
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


import fetchData from '../api/TopUserStats.js';
import AppBanner from '../Components/AppBaner';
import ShowTop from '../Components/Top/ShowTop.jsx';


const TopUsers = ({ navigation }) => {

    const [data, setData] = useState(null);

    const [counter, setCounter] = useState(0);

    const fetchDataOnce = async () => {
        fetchData().then((data) => {
            setData(data);
        });
    };
    const countuno = () => {
        setCounter(cournter + 1);
    }
    useEffect(() => {
        fetchDataOnce();
    }, []);
    return (
        <>
            <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']}
                style={styles.container}
                end={{ x: 0, y: 1.05 }}>
                <ImageBackground source={require('../Img/logo.png')} style={{width:'100%', flex:1}} imageStyle={{ opacity: 0.09, resizeMode: 'contain', bottom: 0, right: 0, position: 'absolute' }}>
                    <FlatList
                        style={{ flex: 1, width: '100%' }}
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <>
                                <ShowTop item={item} />
                            </>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 32,
        textDecorationLine: 'underline',
        color: "#000000",
        textAlign: 'center',
    },
});

export default TopUsers;
