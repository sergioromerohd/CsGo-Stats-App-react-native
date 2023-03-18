import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import Formulario from '../components/formulario';
import userProfileCard from '../components/userProfileCard';

const Main = ({navigation}) => {
    //state for Input
    const [userName, setUserName] = useState('');
    return (
        <Formulario navigation={navigation} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
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



export default Main;

