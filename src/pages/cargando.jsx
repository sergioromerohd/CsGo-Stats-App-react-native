//default react native screen 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';


const Cargando = (props) => {
    //ruta de los props por paraetros
    props = props.route.params;
    nombre=props.steamid;
    const [data, setData] = useState ([]);

    const getCsgoStats = async () => {
        try {
            const response = await fetch('https://public-api.tracker.gg/v2/csgo/standard/profile/steam/'+nombre+'?TRN-Api-Key=');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    useEffect(() => {
        getCsgoStats();
        console.log("Datos en el pantalla de carga");
    }, []);
    console.log(data);
    return (
        <View style={styles.container}>
            <Text style={{ color: "black" }}>{nombre}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
});

export default Cargando;

