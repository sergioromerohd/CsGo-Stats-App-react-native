//baner superior de la app con el logo
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

const AppBanner = (props) => {
    return (
        <>
        
            <View style={styles.container}>
                {props.back?
                <Pressable onPress={() => props.Navigator.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </Pressable>
                :
                <></>
                }
                <Image
                    style={styles.image}
                    source={
                        require('../Img/logo2.png')
                    }
                />
                <Text style={styles.text}>Cs2Stats</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        top: 0,
        left: 0,
        right: 0,
        height:Constants.statusBarHeight+60,
        paddingHorizontal: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 45,
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        color: "white",
    },
});

export default AppBanner;