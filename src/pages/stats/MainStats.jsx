//pagina main Tras el landig
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import fetchData from '../../api/MainStatsApi';
import { LinearGradient } from 'expo-linear-gradient';

import AppBanner from '../../Components/AppBaner';
import UserPost from '../../api/UserPost';
import MainStatsPost from '../../api/MainStatsPost';

const MainStats = (props) => {

    const navigation = useNavigation();

    const [platformUserId, setPlatformUserId] = useState(props.route.params.data.data.data[0].platformUserId);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(0);

    const fetchDataOnce = async () => {
        if (data2 === 0) {
            fetchData(platformUserId).then((data) => {
                setData(data);
                UserPost(data.platformInfo);
                MainStatsPost(data)
                setLoading(false);
                setData2(1);
            });
        }

    };
    useEffect(() => {
        fetchDataOnce();
    }, []);
    return (
        <>
            {isLoading ?
                <>
                    <AppBanner />
                    <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.08, resizeMode: 'contain'}}>
                            <LottieView source={require('../../Img/comdomSpin.json')} style={{
                                width: 125, height: 125,
                            }} autoPlay loop />
                        </ImageBackground>
                    </LinearGradient>
                </>
                :
                <>
                    <AppBanner />
                    <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.09, resizeMode: 'contain'}} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width:'100%'}} > 
                            <ScrollView style={styles.container}>
                                <Text style={styles.text}>{data.platformInfo.platformUserHandle}</Text>
                            </ScrollView>
                        </ImageBackground>
                    </LinearGradient>
                </>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },
});

export default MainStats;