//pagina main Tras el landig
import React, { useState, useEffect } from 'react';
import { StyleSheet,  ScrollView, ImageBackground, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import fetchData from '../../api/MainStatsApi';
import { LinearGradient } from 'expo-linear-gradient';
import { Card, Carousel, PageControl, Modal, View, Text, Assets } from 'react-native-ui-lib';


import Chart from '../../Components/MainStats/chart';
import UserPost from '../../api/UserPost';
import MainStatsPost from '../../api/MainStatsPost';
import UserBaner from '../../Components/MainStats/UserBaner';

const MainStats = (props) => {

    const navigation = useNavigation();

    const [platformUserId, setPlatformUserId] = useState(props.route?.params?.data?.data?.data[0]?.platformUserId ? props.route.params.data.data.data[0].platformUserId : props.route?.params?.platformUserId ? props.route.params.platformUserId : 'null');
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

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

    useEffect(() => {
        if(isVisible){
            Alert.alert(
                "Beta version",
                "This feature is not available in the beta version",
                [
                    { text: "OK", onPress: () => setIsVisible(false) }
                ],
                { cancelable: false }
            );
        }
    }, [isVisible]);
    return (
        <>
            {isLoading ?
                <>
                    <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.08, resizeMode: 'contain' }}>
                            <LottieView source={require('../../Img/comdomSpin.json')} style={{
                                width: 125, height: 125,
                            }} autoPlay loop />
                        </ImageBackground>
                    </LinearGradient>
                </>
                :
                <>
                    <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.09, resizeMode: 'contain' }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                            <ScrollView style={styles.container}>
                                <UserBaner name={data.platformInfo.platformUserHandle} avatar={data.platformInfo.avatarUrl} hours={data.segments[0].stats.timePlayed.displayValue}/>
                                <Card center onPress={() => setIsVisible(true)} style={{width:'80%', marginHorizontal:"10%"}} >
                                    <Chart splits="2" value1={data.segments[0].stats.wins.value} name1="wins" color1="lightgreen"
                                        value2={data.segments[0].stats.losses.value} name2="loose" color2="red" />
                                </Card>
                                <Modal animationType="slide" transparent={true} containerStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }} 
                                 visible={isVisible} onBackgroundPress={() => setIsVisible(false)} onRequestClose={() => setIsVisible(false)} title="titulo" >
                                </Modal>
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