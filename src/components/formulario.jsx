//react native 

import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';

import UserProfileCard from '../components/userProfileCard';

const Formulario = ({ navigation }) => {
    //Formulario del usuario en la primera pagina

    //state for Input
    const [userName, setUserName] = useState('');
    const [SearchUser, setSearchUser] = useState(0);

    useEffect(() => {
        console.log("Datos busqueda usuario");

    }, [SearchUser]);

    return (
        <View style={styles.container}>
            <Text>Steam ID</Text>
            <TextInput
                value={userName}
                onChangeText={(userName) => setUserName(userName)}
                placeholder={'Steam ID'}
                style={styles.input}
            />
            {
                userName ?
                    <Button title="Buscar" style={styles.button} onPress={(SearchUser) =>setSearchUser(SearchUser+1)}>
                        
                    </Button> :
                    <Button style={styles.button} title="Buscar">
                    </Button>
            }
            {
                SearchUser?
                <UserProfileCard navigation={navigation} nombre={userName}/>:
                <Text>no es mayor a 1</Text>
            }
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 200,
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


export default Formulario;