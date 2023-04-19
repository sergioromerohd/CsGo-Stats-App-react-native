import React from 'react';
import Constants from 'expo-constants';
import {StyleSheet} from 'react-native';

import Formulario from '../Components/Formulario';
import LandingNav from '../Components/LandinNav';
import AppBanner from '../Components/AppBaner';

const Main = ({ navigation }) => {
    return (
        <>
            <AppBanner />
            <Formulario styles={styles.container} navigation={navigation} />
            <LandingNav navigation={navigation} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
});



export default Main;