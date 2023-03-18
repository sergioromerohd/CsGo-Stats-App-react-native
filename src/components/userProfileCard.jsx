import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

const UserProfileCard = (props) => {
    console.log(props.nombre);

    const [userInfo, setuserInfo] = useState(null);
    const [cargando, setCargando] = useState();

    const getProfileInfo = async () => {
        try {
            const response = await fetch('https://public-api.tracker.gg/v2/csgo/standard/search?platform=steam&query='+props.nombre+'&TRN-Api-Key=');
            const json = await response.json();
            setuserInfo(json);
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    useEffect(() => {
        if (userInfo === null) {
            getProfileInfo();
        }else{
                setCargando(1);
        }
    }, [userInfo]);
    if (cargando === 1) {
        setTimeout(() => {
            avatarUrl = userInfo.data[0].avatarUrl;
            plataformid = userInfo.data[0].platformUserId;
            setCargando(2);
        }, 2000);
    }
    console.log();

    return (
        <>
            {
                cargando==2 ?
                    <Pressable onPress={() => props.navigation.navigate('cargando',{steamid:plataformid})}>
                    <View style={styles.container}>
                        <Image
                            style={styles.logo}
                            source={{ uri: avatarUrl }}
                        />
                        <Text style={styles.usuario}>{plataformid}</Text>
                    </View>
                    </Pressable>
                    :
                    <></>
            }
                    

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 275,
        height: 75,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'gray',
    },
    logo: {
        width: 65,
        height: 65,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 50,
    },
    usuario: {
        color: 'white',
        marginLeft: 25,
    }
});

export default UserProfileCard;
