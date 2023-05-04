import react from "react";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AppBanner from "../../Components/AppBaner";

const Weapon = () => {
    return (
        <>
        <AppBanner />
        <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.09, resizeMode: 'contain' }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }} >
            </ImageBackground>
        </LinearGradient>
    </>
    );
    }

export default Weapon;