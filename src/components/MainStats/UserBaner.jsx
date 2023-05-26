import react from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Faceit1 from './../../Img/Faceit/faceit1.svg';
import Faceit2 from './../../Img/Faceit/faceit2.svg';
import Faceit3 from './../../Img/Faceit/faceit3.svg';
import Faceit10 from './../../Img/Faceit/faceit10.svg';

//baner para el usuario que tendra imagen nombre y horas jugadas
const UserBaner = (props) => {
    const { name, avatar, hours } = props;
    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row'}}>
                    <View style={styles.avatarContainer}>
                        <Image source={{ uri: avatar }} style={styles.avatar} />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{name}</Text>
                        <Text style={styles.hours}>{hours}</Text>
                    </View>
                </View>
                <View>
                    <View style={{ marginHorizontal:10 }}>
                        <Faceit2 width={50} height={50} />
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    avatarContainer: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height:100,
        resizeMode: 'contain',
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,
        marginHorizontal: 10,
    },
    infoContainer: {
        height: '100%',
        justifyContent: 'center',
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowColor: 'red',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },

    hours: {
        color: 'gray',
        fontSize: 12,
    },
});

export default UserBaner;