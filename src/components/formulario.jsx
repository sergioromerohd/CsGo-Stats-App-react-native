import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, Animated, Platform} from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';


import fetchData from '../api/UserApi';
import UserBanner from '../Components/UserBanner';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const Formulario = ({ navigation }) => {
    //state for Input
    const [userName, setUserName] = useState('');
    //state for data
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    //sate for loading
    const [isLoading, setIsLoading] = useState(false);

    //state for animation
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    //funcion para animar el texto
    
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);



    //funcion para hacer fetch a la api al hacer click en el boton
    const handleButtonPress = async () => {
        setIsLoading(true);
        const apiData = await fetchData(userName);
        if (apiData === null) {
            setData(null);
            setError(null);
        } else if (apiData.message) {
            setError(apiData.message);
            setData(null);
            setIsLoading(false);
        } else {
            setData(apiData);
            setError(null);
            setIsLoading(false);
        }
    };
    //funcion para filtrar los caracteres no deseados
    const handleTextChange = (newText) => {
        // Filtra los caracteres no deseados utilizando una expresión regular
        const filteredText = newText.replace(/[^a-zA-Z0-9 _]/g, '');
        // Actualiza el valor del componente TextInput solo si el texto es válido
        setUserName(filteredText);
    };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.align}>
                    <Animated.View style={[styles.card,{ opacity: fadeAnim }]}>
                        <Text style={styles.steamid}>Steam ID</Text>
                        <View style={styles.conthoriz}>
                            <TextInput
                                value={userName}
                                onChangeText={handleTextChange}
                                placeholder={'Steam ID'}
                                style={userName.length > 0 ? styles.input_hover : styles.input}
                            />
                            {userName.length > 0 ?
                                <Pressable onPress={() => setUserName('') && setData(null) && setIsLoading(false)} style={{width:'15%',paddingHorizontal:10}}>
                                    <AntDesign name="retweet" size={24} color="black" />
                                </Pressable>
                                :
                                <></>
                            }
                        </View>
                        {userName.length > 0 ?
                            <Pressable onPress={handleButtonPress}>
                                <LinearGradient colors={['black', 'black', 'black']} style={styles.button}>
                                    <Text style={{ color: "white" }}>Buscar</Text>
                                </LinearGradient>
                            </Pressable>
                            :
                            <Pressable style={styles.button}>
                                <Text style={{ color: "white" }}>Buscar</Text>
                            </Pressable>
                        }
                    </Animated.View>
                    {data ?
                        <Pressable onPress={() => navigation.navigate('SearchLanding', { data: { data } })}>
                            <UserBanner data={data} />
                        </Pressable>
                        : error ? <Text>{error}</Text>
                            : isLoading&&Platform.OS!=='web'? <LottieView style={{
                                width: 125, height: 125,
                            }} source={require('../Img/comdomSpin.json')} autoPlay loop />
                                :isLoading&&Platform.OS==='web'?<><Text>Web no soportada temporalmete</Text></>: <></>}
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({

    card: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 35,
        paddingHorizontal: 20,

    },
    align: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '40%'
    },
    steamid: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    container: {
        flex: 1,
    },
    conthoriz: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    input: {
        minWidth: 200,
        height: 44,
        padding: 10,
        width: '90%',
    },
    input_hover: {
        width: '75%',
        height: 44,
        padding: 10,
        borderRightWidth: 0.5,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },

});


export default Formulario;