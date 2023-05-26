import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground,TextInput, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


import fetchData from '../api/TopUserStats.js';
import ShowTop from '../Components/Top/ShowTop.jsx';

import { Picker } from 'react-native-ui-lib';


const TopUsers = ({ navigation }) => {

    const [data, setData] = useState(null);
    const [Orderby, setOrderby] = useState(0);
    const [search, setSearch] = useState(null);

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

    const handleTextChange = (text) => {
        setSearch(text);
    };
    return (
        <>
            <LinearGradient colors={['#ffffff', '#ffffff', '#rgba(0,0,0,0.2)']}
                style={styles.container}
                end={{ x: 0, y: 1.05 }}>
                <ImageBackground source={require('../Img/logo.png')} style={{ width: '100%', flex: 1 }}
                    imageStyle={{ opacity: 0.09, resizeMode: 'contain', bottom: 0, right: 0, position: 'absolute' }}>
                    <View style={{alignItems: 'center',flexDirection:'row' ,marginHorizontal:'5%'}}>
                        <Icon name="caret-down" size={20} color="#000" style={{ marginRight: 2 }} />
                        <Picker
                            placeholder="Order by:"
                            value={Orderby}
                            useWheelPicker
                            enableModalBlur={true}
                            onChange={changeorder}
                            topBarProps={{ title: 'Order by:' }}
                            style={styles.picker}
                        >
                            <Picker.Item value={0} label="K/D" />
                            <Picker.Item value={1} label="win %" />
                            <Picker.Item value={2} label="Accuracy %" />
                        </Picker>
                        <TextInput placeholder="Search" style={styles.search} placeholderTextColor={'rgba(0,0,0,0.5)'} onChangeText={handleTextChange} />
                    </View>
                    <FlatList
                        style={styles.flatList}
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <>
                                <ShowTop orderby={Orderby} item={item} navigation={navigation} search={search} />
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
      imageBackground: {
        width: '100%',
        flex: 1,
      },
      imageStyle: {
        opacity: 0.09,
        resizeMode: 'contain',
        bottom: 0,
        right: 0,
        position: 'absolute',
      },
      pickerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      picker: {
        fontSize: 18,
        shadowColor: 'rgba(150,0,0,1)',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        borderWidth: 1,
        borderColor: 'rgba(150,0,0,1)',
        backgroundColor: 'rgba(0,0,0,0.08)',
        borderRadius: 25,
        marginTop:20,
        height: 50,
        minWidth: Dimensions.get('window').width * 0.2,
        textAlign: 'center',
        paddingHorizontal: '1%'
      },
        search:{    
        fontSize: 22,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: 'rgba(0,0,0,0.08)',
        borderRadius: 25,
        height: 50,
        paddingHorizontal: 10,
        marginLeft:10,
        flex:1
        },
      flatList: {
        flex: 1,
        width: '100%',
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        paddingVertical: 12,
        borderTopColor: '#000000',
      },
});

export default TopUsers;
