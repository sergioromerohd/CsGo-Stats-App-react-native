//pagina de about
import React, { useState, useEffect } from 'react';
import { View,  StyleSheet, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


import fetchData from '../api/TopUserStats.js';
import AppBanner from '../Components/AppBaner';
import ShowTop from '../Components/Top/ShowTop.jsx';

import {Text, Picker} from 'react-native-ui-lib';


const TopUsers = ({ navigation }) => {

    const [data, setData] = useState(null);

    const [Orderby, setOrderby] = useState(0);

    const changeorder = (value) => {
        setOrderby(value);
        let temp = {
            0: 'kd',
            1: 'winp',
            2: 'acu'
        };
        setData(null);
        fetchData(temp[value]).then((data) => {
            setData(data);
        });
    }

    const fetchDataOnce = async () => {
        fetchData('kd').then((data) => {
            setData(data);
        });
    };
    useEffect(() => {
        fetchDataOnce();
    }, []);
    return (
        <>
            <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']}
                style={styles.container}
                end={{ x: 0, y: 1.05 }}>
                <ImageBackground source={require('../Img/logo.png')} style={{ width: '100%', flex: 1 }} 
                imageStyle={{ opacity: 0.09, resizeMode: 'contain', bottom: 0, right: 0, position: 'absolute' }}>
                    <Picker
                        placeholder="Order by:"
                        value={Orderby}
                        useWheelPicker
                        enableModalBlur={false}
                        onChange={changeorder}
                        topBarProps={{ title: 'Order by:' }}
                        style={{ opacity: 1,fontSize: 20, textAlign:'center',shadowColor: "#000000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84}}
                    >
                        <Picker.Item value={0} label="K/D" />
                        <Picker.Item value={1} label="win %" />
                        <Picker.Item value={2} label="Accuracy %" />
                    </Picker>

                    <FlatList
                        style={{ flex: 1, width: '100%', borderTopWidth: 1, paddingVertical: 12, borderTopColor: '#000000'}}
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <>
                                <ShowTop orderby={Orderby} item={item} navigation={navigation} />
                            </>
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
});

export default TopUsers;
