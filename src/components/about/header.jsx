import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

const Header = () => {
    return (
        <>
            <View style={styles.header}>
                <Image source={require('../../Img/logo.png')} style={{ width: 150, height: 70, marginRight: 10, }} />
                <View>
                    <Text style={styles.text}>{Constants.manifest.name}</Text>
                    <Text style={styles.text}>{Constants.manifest.version}</Text>
                    <Text style={{ fontSize: 11 }}>Created by {Constants.manifest.owner}</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '85%',
        height: '20%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'lightgray'

    },
    text: {
        fontSize: 16,
        color: "#000000",
    },
});

export default Header;