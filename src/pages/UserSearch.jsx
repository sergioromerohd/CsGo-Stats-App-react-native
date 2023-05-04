import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient/build/LinearGradient';

import Formulario from '../Components/Formulario';
import AppBanner from '../Components/AppBaner';

const UserSearch = ({ navigation }) => {
    return (
        <>
            <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']}
                style={styles.container}
                end={{ x: 0, y: 1.05 }}>
                <ImageBackground source={require('../Img/logo.png')} imageStyle={{ opacity: 0.09, resizeMode: 'contain', bottom: 0, right: 0, position: 'absolute' }}
                    style={styles.container}>
                    <Formulario styles={styles.container} navigation={navigation} />
                </ImageBackground>
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
});



export default UserSearch;