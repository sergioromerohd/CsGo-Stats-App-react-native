import react from "react";
import { useEffect, useState, useRef } from "react";
import { ImageBackground, Image, View, Dimensions, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';
import Carousel from "react-native-snap-carousel";
import { AntDesign } from '@expo/vector-icons';

import AppBanner from "../../Components/AppBaner";
import fetchData from '../../api/MapApi';
import MapStatsPost from '../../api/MapStatsPost';

const Maps = (props) => {

    const [platformUserId, setPlatformUserId] = useState(props.route?.params?.data?.data?.data[0]?.platformUserId ? props.route.params.data.data.data[0].platformUserId : props.route?.params?.platformUserId ? props.route.params.platformUserId : 'null');
    const [isLoading, setLoading] = useState(true);
    const [map, setMap] = useState(null);
    const [map2, setMap2] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselRef = useRef(null);

    const fetchMapOnce = async () => {
        if (map2 === 0) {
            fetchData(platformUserId).then((data) => {
                setMap(data);
                setLoading(false);
                for (let i = 0; i < data.length; i++) {
                    MapStatsPost(data[i], platformUserId)
                }
                setMap2(1);
            });
        }
    };
    useEffect(() => {
        fetchMapOnce();
    }, []);

    return (
        <>
            {!map ? <>
                <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.08, resizeMode: 'contain' }}>
                        <LottieView source={require('../../Img/comdomSpin.json')} style={{
                            width: 125, height: 125,
                        }} autoPlay loop />
                    </ImageBackground>
                </LinearGradient>
            </>
                : <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.09, resizeMode: 'contain' }} style={{ flex: 1, alignItems: "center", width: '100%' }} >
                        <View style={{ justifyContent: "center", alignItems: "center", height: Dimensions.get('window').height * 0.2 }}>
                            <Carousel
                                data={map}
                                initialScrollIndex={0}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }}>
                                            <ImageBackground source={{ uri: item.metadata.imageUrl }} style={{ height: Dimensions.get('window').height * 0.2, width: "100%", justifyContent: "center", alignItems: "center" }} imageStyle={{ resizeMode: 'cover' }}>
                                                <View style={{ width: '100%', height: "100%", backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                                                    <Pressable style={{ height: "100%", justifyContent: "center", paddingHorizontal: "5%" }} onPress={() => { carouselRef.current.snapToPrev() }}>
                                                        <AntDesign name="arrowleft" size={24} color="white" />
                                                    </Pressable>
                                                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 20, color: "white", textShadowColor: 'red', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>{item.metadata.name}</Text>
                                                    <Pressable style={{ height: "100%", justifyContent: "center", paddingHorizontal: "5%" }} onPress={() => { carouselRef.current.snapToNext() }}>
                                                        <AntDesign name="arrowright" size={24} color="white" />
                                                    </Pressable>
                                                </View>
                                            </ImageBackground>
                                        </View>
                                    )
                                }}
                                ref={carouselRef}
                                loop={true}
                                sliderWidth={Dimensions.get('window').width}
                                onSnapToItem={(index) => setActiveIndex(index)}
                                itemWidth={Dimensions.get('window').width}
                                layout={'default'}
                                layoutCardOffset={10}
                            />
                        </View>
                    </ImageBackground>
                </LinearGradient>}

        </>
    );
}

export default Maps;