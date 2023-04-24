import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView,Animated} from 'react-native';
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
    const [error , setError] = useState(null);
    //sate for loading
    const [isLoading, setIsLoading] = useState(false);

    const [fadeAnim] = useState(new Animated.Value(0));


    //funcion para hacer fetch a la api al hacer click en el boton
    const handleButtonPress = async () => {
        setIsLoading(true);
        const apiData = await fetchData(userName);
        if(apiData===null){
            setData(null);
            setError(null);
        }else if (apiData.message) {
            setError(apiData.message);
            setData(null);
            setIsLoading(false);
        }else{
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
                    <Text style={styles.steamid}>Steam ID</Text>
                    <View style={styles.conthoriz}>
                        <TextInput
                            value={ userName}
                            onChangeText={handleTextChange}
                            placeholder={'Steam ID'}
                            style={userName.length > 0 ? styles.input_hover : styles.input}
                        />
                        {userName.length > 0 ?
                            <Pressable onPress={() => setUserName('') && setData(null) && setIsLoading(false)}>
                                <AntDesign name="retweet" size={24} color="black" />
                            </Pressable>
                            :
                            <></>
                        }
                    </View>
                    {userName.length > 0?
                    <Pressable style={styles.button} onPress={handleButtonPress}>
                        <Text style={{ color: "white" }}>Buscar</Text>
                    </Pressable>
                    :<View style={styles.button}>
                        <Text style={{ color: "white" }}>Buscar</Text>
                    </View>}
                    {data?
                        <Pressable onPress={() => navigation.navigate('SearchLanding', { data: { data } })}>
                            <UserBanner data={data} />
                        </Pressable>
                        :error? <Text>{error}</Text>
                        :isLoading ? <LottieView style={{
                            width: 125, height: 125,
                        }} source={require('../Img/comdomSpin.json')} autoPlay loop />
                            :<></>}
                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
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
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 20,
        
    },
    input_hover:{
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 20,
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