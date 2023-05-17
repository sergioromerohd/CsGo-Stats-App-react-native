import react from "react";
import { ImageBackground, Image, FlatList, View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';
import Carousel from 'react-native-snap-carousel';
import { Card, PageControl } from 'react-native-ui-lib';
import { AntDesign } from '@expo/vector-icons';



import AppBanner from "../../Components/AppBaner";
import fetchData from '../../api/WeaponApi';
import MapStatsPost from '../../api/MapStatsPost';
import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType";

const Weapon = (props) => {

    const [platformUserId, setPlatformUserId] = useState(props.route?.params?.data?.data?.data[0]?.platformUserId ? props.route.params.data.data.data[0].platformUserId : props.route?.params?.platformUserId ? props.route.params.platformUserId : 'null');
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [compareWeapon, setCompareWeapon] = useState(null);

    const fetchDataOnce = async () => {
        if (data2 === 0) {
            fetchData(platformUserId).then((data) => {
                setData(data);
                setLoading(false);
                //for (let i = 0; i < data.segments.length; i++) {
                  //  MapStatsPost(data)
                //}
                setData2(1);
            });
        }

    };
    
    useEffect(() => {
        fetchDataOnce();
    }, []);

    return (
        <>
            {!data ? <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.08, resizeMode: 'contain' }}>
                    <LottieView source={require('../../Img/comdomSpin.json')} style={{
                        width: 125, height: 125,
                    }} autoPlay loop />
                </ImageBackground>
            </LinearGradient>
                :
                <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ImageBackground source={require('../../Img/logo.png')} imageStyle={{ opacity: 0.09, resizeMode: 'contain' }} style={{ flex: 1, alignItems: 'center', width: '100%' }} >
                        <View style={{ width: '90%', backgroundColor: "black", justifyContent: "center", alignItems: "center", borderRadius: 25, marginVertical: "2%" }}>
                            <Carousel
                                data={data}

                                firstItem={activeIndex}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: "center", width: '100%', }}>
                                            <Image source={{ uri: item.metadata.imageUrl }} style={{ height: 100, width: 125, resizeMode: "contain", shadowColor: 'red', shadowOffset: { width: -1, height: 1 }, shadowOpacity: 1, shadowRadius: 1, }} />
                                            <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 20, color: "white" }}>{item.metadata.name}</Text>
                                        </View>
                                    )
                                }}
                                sliderWidth={Dimensions.get('window').width-50}
                                sliderHeight={10}
                                onSnapToItem={(index) => setActiveIndex(index)}
                                itemWidth={Dimensions.get('window').width-50}
                                layout={'tinder'}
                                layoutCardOffset={150}
                            />
                        </View>
                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: "2%" }}>{data[activeIndex].metadata.name}</Text>

                        <ScrollView
                            showsVerticalScrollIndicator={false}>

                            <Card
                                style={{ backgroundColor: "rgba(255,255,355,1)", borderRadius: 25, borderWidth: 1, borderColor: "black" }}
                                onPress={() => {
                                    setCompareWeapon(activeIndex);
                                }}>
                                <Text style={{ fontSize: 9, textAlign: "right", marginRight: "5%", textDecorationLine: "underline", opacity: 0.4 }}>Click to compare</Text>
                                <View style={{ paddingVertical: "5%" }}>
                                    {Object.keys(data[activeIndex].stats).map((key, index) => (
                                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                                            <View>
                                                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', color: 'black', marginVertical: 5, textShadowColor: 'gray', textShadowOffset: { height: 1 }, textShadowRadius: 1 }}>{key}</Text>
                                            </View>
                                            <View style={{ alignItems: 'center', borderRadius: 5 }}>
                                                <Text style={{ fontSize: 20, color: 'white', paddingHorizontal: 20, marginVertical: 5, textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2, textAlign: 'right' }}>{(activeIndex >= 0) && data[activeIndex].stats[key].displayValue}</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </Card>
                            {
                                compareWeapon !== null ?
                                    <>
                                        <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: "4%", textAlign: "center" }}>Compare with: {data[compareWeapon].metadata.name}</Text>
                                        <Card center
                                            style={{ backgroundColor: "rgba(255,255,355,1)", borderRadius: 25, borderWidth: 1, borderColor: "black", paddingVertical: 15 }}>
                                            <View style={{ paddingVertical: "5%" }}>
                                                {Object.keys(data[compareWeapon].stats).map((key, index) => (
                                                    <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                                                        <View>
                                                            <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left', color: "black", marginVertical: 5, textShadowColor: 'gray', textShadowOffset: { height: 1 }, textShadowRadius: 1 }}>{key}</Text>
                                                        </View>
                                                        <View style={{ alignItems: 'center', borderRadius: 5 }}>
                                                            {data[compareWeapon].stats[key].value > data[activeIndex].stats[key].value ?
                                                                <Text style={{ fontSize: 20, color: '#228B22', paddingHorizontal: 20, marginVertical: 5, textShadowColor: 'black', textShadowOffset: { width: 1.2, height: 1.2 }, textShadowRadius: 1, textAlign: 'right' }}>{(activeIndex >= 0) && data[compareWeapon].stats[key].displayValue}</Text>
                                                                :
                                                                <Text style={{ fontSize: 20, color: 'rgb(40,40,40)', paddingHorizontal: 20, marginVertical: 5, textShadowColor: 'red', textShadowOffset: { width: 0.8, height: 0.8 }, textShadowRadius: 1, textAlign: 'right' }}>{(activeIndex >= 0) && data[compareWeapon].stats[key].displayValue}</Text>
                                                            }
                                                        </View>
                                                    </View>
                                                ))}
                                            </View>
                                        </Card></> : null

                            }

                        </ScrollView>
                    </ImageBackground>
                </LinearGradient>
            }
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

export default Weapon;