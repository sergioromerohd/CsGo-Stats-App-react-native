import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const CardItems = ({ tittle, active, compare }) => {
    return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
        <View style={{ minWidth: '50%' }}>
            <Text style={styles.subtittle}>{tittle}</Text>
        </View>
        <View style={{ alignItems: 'flex-end', flex: 1 }}>
            <Text style={{ fontSize: 20, color: 'white', paddingHorizontal: 5, marginVertical: 5, textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2, textAlign: 'right' }}>{active}</Text>
        </View>
        {compare !== null ?
            <View style={{}}>

                {compare > active ?
                    <Text style={{ fontSize: 18, color: '#228B22', marginVertical: 5, textShadowColor: 'black', textShadowOffset: { width: 1.2, height: 1.2 }, textShadowRadius: 1, textAlign: 'left' }}>/{compare}</Text>
                    :
                    <Text style={{ fontSize: 18, color: 'rgb(40,40,40)', marginVertical: 5, textShadowColor: 'red', textShadowOffset: { width: 0.8, height: 0.8 }, textShadowRadius: 1, textAlign: 'left' }}>/{compare}</Text>
                }
            </View>
            : null
        }
    </View>
    );

}

const styles = StyleSheet.create({
    subtittle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'black',
        marginVertical: 5,
        textShadowColor: 'gray',
        textShadowOffset: { height: 1 },
        textShadowRadius: 1
    },
});

export default CardItems;
