import react from "react";
import { ImageBackground, Image, View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { useEffect, useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';
import Carousel from 'react-native-snap-carousel';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-ui-lib';



import fetchData from '../../api/WeaponApi';
import WeaponStatsPost from '../../api/WeaponStatsPost';
import GetWeaponStats from "../../api/GetWeaponStats";
import CardItems from "../../Components/Weapon/CardItems";
import ChartWeapon from "../../Components/Weapon/chartWeapon";

const Weapon = (props) => {

    const [platformUserId, setPlatformUserId] = useState(props.route?.params?.data?.data?.data[0]?.platformUserId ? props.route.params.data.data.data[0].platformUserId : props.route?.params?.platformUserId ? props.route.params.platformUserId : 'null');
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [compareWeapon, setCompareWeapon] = useState(null);

    const carouselRef = useRef(null);
    let datosAgrupados = [];
    if (data) {
        datosAgrupados = data.reduce((agrupados, data) => {
            const { numFila, ...restoDatos } = data;

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

    const fetchDataOnce = async () => {
        if (data2 === 0) {
            fetchData(platformUserId).then((data) => {
                for (let i = 0; i < data.length; i++) {
                    WeaponStatsPost(data[i], platformUserId);
                }
                GetWeaponStats(platformUserId).then((data2) => {
                    setData(data2);
                    setData2(1);
                });
            });
        }

    };

    useEffect(() => {
        fetchDataOnce();
    }, []);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.weaponContainer}
                onPress={() => setActiveIndex(index)}
            >
                <Pressable style={{ justifyContent: "center", paddingHorizontal: "5%" }} onPress={() => { carouselRef.current.snapToPrev() }}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </Pressable>
                <Image
                    source={{ uri: item.img }}
                    style={styles.weaponImage}
                />
                <Text style={styles.weaponName}>{item.weapon}</Text>
                <Pressable style={{ justifyContent: "center", paddingHorizontal: "5%" }} onPress={() => { carouselRef.current.snapToPrev() }}>
                    <AntDesign name="arrowright" size={24} color="white" />
                </Pressable>
            </TouchableOpacity>
        );
    };

    return (
        <>
            {data==null ? <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                                data={datosAgrupados[0].data}
                                firstItem={activeIndex}
                                renderItem={renderItem}
                                ref={carouselRef}
                                sliderWidth={Dimensions.get('window').width - 50}
                                sliderHeight={10}
                                onSnapToItem={(index) => setActiveIndex(index)}
                                itemWidth={Dimensions.get('window').width - 50}
                                layout={'tinder'}
                                layoutCardOffset={150}
                            />
                        </View>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ flex: 1 }}
                        >

                            <Card
                                style={{ backgroundColor: "rgba(255,255,355,1)", borderRadius: 25, borderWidth: 1, borderColor: "black", marginVertical: "2%" }}
                                onPress={() => {
                                    setCompareWeapon(activeIndex);
                                }}>
                                <Text style={{ fontSize: 9, textAlign: "right", marginRight: "5%", textDecorationLine: "underline", opacity: 0.4 }}>Click to compare</Text>
                                <View style={{ paddingVertical: "5%", width: "100%", alignItems: "center" }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                                        <View style={{ minWidth: '30%' }}>
                                            <Text style={styles.subtittle}>stats</Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                            <Text style={[styles.subtittle, { textAlign: 'right' }]}>{datosAgrupados[0].data[activeIndex].weapon}</Text>
                                        </View>
                                        {compareWeapon !== null ?
                                            <View style={{ alignItems: 'flex-end' }}>
                                                <Text style={styles.subtittle}>/{datosAgrupados[0].data[compareWeapon].weapon}</Text>
                                            </View> : null}

                                    </View>
                                    <CardItems tittle={"Kills"} active={datosAgrupados[0].data[activeIndex].kills} compare={compareWeapon !== null ? datosAgrupados[0].data[compareWeapon].kills : null} />
                                    <CardItems tittle={"shostFired"} active={datosAgrupados[0].data[activeIndex].shotsFired} compare={compareWeapon !== null ? datosAgrupados[0].data[compareWeapon].shotsFired : null} />
                                    <CardItems tittle={"shostHit"} active={datosAgrupados[0].data[activeIndex].shotsHit} compare={compareWeapon !== null ? datosAgrupados[0].data[compareWeapon].shotsHit : null} />
                                    <CardItems tittle={"shostAccuracy"} active={datosAgrupados[0].data[activeIndex].shotsAccuracy} compare={compareWeapon !== null ? datosAgrupados[0].data[compareWeapon].shotsAccuracy : null} />
                                </View>
                            </Card>
                            <ChartWeapon datos={datosAgrupados} activeIndex={activeIndex} />

                        </ScrollView>
                    </ImageBackground>
                </LinearGradient>
            }
        </>
    );
}

const styles = StyleSheet.create({
    wrapper: {},
    weaponContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        marginHorizontal: 10,
    },
    weaponImage: {
        height: 100,
        width: 125,
        resizeMode: 'contain',
        shadowColor: 'red',
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    weaponName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        color: 'white',
    },
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
    subtittle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black',
        marginVertical: 5,
        textShadowColor: 'gray',
        textShadowOffset: { height: 1 },
        textShadowRadius: 1
    },
});

export default Weapon;