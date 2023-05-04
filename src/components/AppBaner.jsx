//baner superior de la app con el logo
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

const AppBanner = () => {
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={
                        require('../Img/logo.png')
                    }
                />
                <Text style={styles.text}>Cs:Go-Stats</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        top: 0,
        left: 0,
        right: 0,
        height:Constants.statusBarHeight+60,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 45,
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        color: "white",
    },
});

export default AppBanner;