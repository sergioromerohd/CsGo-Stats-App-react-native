//pagina main Tras el landig
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import fetchData from '../api/MainStatsApi';

import AppBanner from '../Components/AppBaner';
import UserPost from '../api/UserPost';
import MainStatsPost from '../api/MainStatsPost';
import StatsNav from '../Components/MainStats/StatsNav';

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
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <LottieView source={require('../Img/comdomSpin.json')} style={{
                            width: 125, height: 125,
                        }} autoPlay loop />
                    </View>
                </>
                :
                <>
                    <AppBanner />
                    <ScrollView style={styles.container}>
                        <Text style={styles.text}>{data.platformInfo.platformUserHandle}</Text>
                    </ScrollView>
                </>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
    },
});

export default MainStats;