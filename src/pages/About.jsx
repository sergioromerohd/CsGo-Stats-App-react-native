//pagina de about
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';


import LandingNav from '../Components/LandinNav';
import LinksAbout from '../Components/about/links';
import Header from '../Components/about/header';

const About = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>About</Text>
                <Header />
                <View style={styles.links}>
                    <LinksAbout ico="github" text="SergioRomero_HD"/>
                    <LinksAbout ico="gmail" text="sromerod@myuax.com"/>
                    <LinksAbout ico="web-box" text=".com"/>
                </View>
            </View>
            <LandingNav navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 15,
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
