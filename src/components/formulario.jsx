import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, Pressable, ScrollView, Dimensions } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

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
    //sate for loading
    const [isLoading, setIsLoading] = useState(false);

    //funcion para hacer fetch a la api al hacer click en el boton
    const handleButtonPress = async () => {
        setIsLoading(true);
        const apiData = await fetchData(userName);
        setData(apiData);
        if (apiData === null) {
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
            <ScrollView style={styles.container}>
                <View style={styles.align}>
                    <Text>Steam ID</Text>
                    <View style={styles.conthoriz}>
                        <TextInput
                            value={userName}
                            onChangeText={handleTextChange}
                            placeholder={'Steam ID'}
                            style={styles.input}
                        />
                        {userName.length > 0 ?
                            <Pressable onPress={() => setUserName('') && setData(null) && setIsLoading(false)}>
                                <AntDesign name="retweet" size={24} color="black" />
                            </Pressable>
                            :
                            <></>
                        }
                    </View>
                    <Pressable style={styles.button} onPress={handleButtonPress}>
                        <Text style={{ color: "white" }}>Buscar</Text>
                    </Pressable>
                    {data ?
                        <Pressable onPress={() => navigation.navigate('MainStats', {data: { data } })}>
                            <UserBanner data={data} />
                        </Pressable>
                        :
                        isLoading ? <LottieView style={{
                            width: 125, height: 125,
                        }} source={require('../Img/comdomSpin.json')} autoPlay loop />
                            : <></>}
                </View>
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    align: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 100,
    },
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    conthoriz: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#ffffff',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#000000',
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