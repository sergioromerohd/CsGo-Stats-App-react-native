import { useEffect, useState, useRef } from "react";
import { ImageBackground, StyleSheet, View, Dimensions, Text, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';
import Carousel from "react-native-snap-carousel";
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-ui-lib';

import fetchData from '../../api/MapApi';
import MapStatsPost from '../../api/MapStatsPost';
import GetMApStats from "../../api/GetMapStats";
import ChartMap from "../../Components/map/chartMap";


const Maps = (props) => {

    const [platformUserId, setPlatformUserId] = useState(props.route?.params?.data?.data?.data[0]?.platformUserId ? props.route.params.data.data.data[0].platformUserId : props.route?.params?.platformUserId ? props.route.params.platformUserId : 'null');
    const [map, setMap] = useState(null);
    const [map2, setMap2] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselRef = useRef(null);
    let datosAgrupados = [];
    if (map) {
        datosAgrupados = map.reduce((agrupados, map) => {
            const { numFila, ...restoDatos } = map;
            // Verificar si el número de fila ya existe en el objeto agrupados
            const grupoExistente = agrupados.find(grupo => grupo.numFila === numFila);
            if (grupoExistente) {
                // Agregar el objeto al arreglo existente
                grupoExistente.data.push(restoDatos);
            } else {
                // Crear un nuevo grupo con el arreglo de objetos
                agrupados.push({
                    numFila: numFila,
                    data: [restoDatos]
                });
            }
            return agrupados;
        }, []);
    }

    function stringToNumber(string) {
        var number = string.replace(/,/g, '');
        return number;
    }

    const fetchMapOnce = async () => {
        if (map2 === 0) {
            fetchData(platformUserId).then((data) => {
                for (let i = 0; i < data.length; i++) {
                    MapStatsPost(data[i], platformUserId)
                }
                GetMApStats(platformUserId).then((data2) => {
                    setMap(data2);
                    setMap2(1);
                })
            });
        }
    };

    useEffect(() => {
        fetchMapOnce();
    }, []);
    return (
        <>
            {!map2 ? <>
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
                                data={datosAgrupados[datosAgrupados.length - 1].data}
                                initialScrollIndex={0}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }}>
                                            <ImageBackground source={{ uri: item.img }} style={{ height: Dimensions.get('window').height * 0.2, width: "100%", justifyContent: "center", alignItems: "center" }} imageStyle={{ resizeMode: 'cover' }}>
                                                <View style={{ width: '100%', height: "100%", backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                                                    <Pressable style={{ height: "100%", justifyContent: "center", paddingHorizontal: "5%" }} onPress={() => { carouselRef.current.snapToPrev() }}>
                                                        <AntDesign name="arrowleft" size={24} color="white" />
                                                    </Pressable>
                                                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 20, color: "white", textShadowColor: 'red', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>{item.mapa}</Text>
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
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Card
                                style={styles.card}
                                onPress={() => {

                                }}>
                                <Text style={styles.card2}>Click to compare</Text>
                                <View style={{ paddingVertical: "2%", justifyContent: "center" }}>
                                    <View style={{ justifyContent: "space-around", flex: 1 }}>
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.infoText}>Wins</Text>
                                            <Text style={styles.infoText}>{datosAgrupados[0].data[activeIndex].wins}</Text>
                                        </View>
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.infoText}>Looses</Text>
                                            <Text style={styles.infoText}>{stringToNumber(datosAgrupados[0].data[activeIndex].rounds) - stringToNumber(datosAgrupados[datosAgrupados.length - 1].data[activeIndex].wins)}</Text>
                                        </View>
                                        <View style={styles.infoContainer}>
                                            <Text style={styles.infoText}>Rounds</Text>
                                            <Text style={styles.infoText}>{datosAgrupados[0].data[activeIndex].rounds}</Text>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                            <ChartMap datos={datosAgrupados} activeIndex={activeIndex} />
                        </ScrollView>
                    </ImageBackground>
                </LinearGradient>}

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        backgroundColor: "rgba(255,255,355,1)",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        paddingHorizontal: "3%",
        marginVertical: "3%"
    },
    card2: {
        fontSize: 9,
        textAlign: "right",
        marginRight: "2%",
        textDecorationLine: "underline",
        opacity: 0.4
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "3%"
    },
    infoText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center",
        color: "black"
    },
});


export default Maps;