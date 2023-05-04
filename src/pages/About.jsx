//pagina de about
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';


import LinksAbout from '../Components/about/links';
import Header from '../Components/about/header';
import AppBanner from '../Components/AppBaner';

const About = ({ navigation }) => {
    return (
        <>
            <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']}
                style={styles.container}
                end={{ x: 0, y: 1.05 }}>
                <ImageBackground source={require('../Img/logo.png')} imageStyle={{ opacity: 0.075, resizeMode: 'contain', bottom: 0, right: 0, position: 'absolute' }}
                    style={styles.container}>
                    <Text style={styles.title}>About</Text>
                    <Header />
                    <View style={styles.links}>
                        <LinksAbout ico="github" text="SergioRomero_HD" />
                        <LinksAbout ico="gmail" text="sromerod@myuax.com" />
                        <LinksAbout ico="web-box" text=".com" />
                    </View>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 33,
        fontWeight: "bold",
        color: "#000000",
        marginBottom: 10,
        opacity: 0.7,
        textDecorationLine: 'underline',
    },

    links: {
        paddingVertical: 20,
        width: '80%',
        justifyContent: 'space-around',
        minHeight: 150,
    }
});

export default About;
