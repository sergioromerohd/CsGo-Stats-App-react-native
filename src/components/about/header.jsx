import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Constants from "expo-constants";

const Header = () => {
    return (
        <>
            <View style={styles.header}>
                <Image source={require('../../Img/logo.png')} style={{ width: Dimensions.get('window').width / 4, height: '100%', marginHorizontal: 10,resizeMode:"contain" }} />
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
        minHeight:"25%",
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