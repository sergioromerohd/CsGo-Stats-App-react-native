import react from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient/build/LinearGradient";

import { useState } from "react";


const ShowTop = (items) => {
    const [data, setData] = useState(items.item);
    const [value, setValue] = useState(
        items.orderby===0 ? data.kd : items.orderby===1 ? data.wlPercentage : data.shotsAccuracy
    );
    const search = items.search;
    
    return (
        <>
            {search == null || data.user.toLowerCase().includes(search.toLowerCase()) ?

            data.numFila == 1 ?
                <Pressable onPress={() => items.navigation.navigate('SearchLanding', { platformUserId: data.id })}>
                    <LinearGradient colors={['#FEDB37', '#9f7928', '#8A6E2F']}
                        end={{ x: 1, y: 4 }}
                        start={{ x: 0.1, y: 0.5 }}
                        style={styles.container1}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text Style={styles.numero}>{data.numFila}</Text>
                            <Image
                                source={{ uri: data.avatar }}
                                style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 5 }}
                            />
                        </View>
                        <View Style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Text style={styles.text}>{data.user}</Text>
                            <Text style={styles.value}>{value}</Text>
                        </View>
                    </LinearGradient>
                </Pressable>
                : data.numFila == 2 ?
                    <Pressable onPress={() => items.navigation.navigate('SearchLanding', { platformUserId: data.id })}>
                        <View style={styles.container2}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text Style={styles.numero}>{data.numFila}</Text>
                                <Image
                                    source={{ uri: data.avatar }}
                                    style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 5 }}
                                />
                            </View>
                            <View Style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text style={styles.text}>{data.user}</Text>
                                <Text style={styles.value}>{value}</Text>
                            </View>
                        </View>
                    </Pressable>
                    : data.numFila == 3 ?
                        <Pressable onPress={() => items.navigation.navigate('SearchLanding', { platformUserId: data.id })}>
                            <View style={styles.container3}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text Style={styles.numero}>{data.numFila}</Text>
                                    <Image
                                        source={{ uri: data.avatar }}
                                        style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 5 }}
                                    />
                                </View>
                                <View Style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                    <Text style={styles.text}>{data.user}</Text>
                                    <Text style={styles.value}>{value}</Text>
                                </View>
                            </View>
                        </Pressable>
                        :
                        <Pressable onPress={() => items.navigation.navigate('SearchLanding', { platformUserId: data.id })}>
                            <View style={styles.container}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text Style={styles.numero}>{data.numFila}</Text>
                                    <Image
                                        source={{ uri: data.avatar }}
                                        style={{ width: 50, height: 50, borderRadius: 50, marginHorizontal: 5 }}
                                    />
                                </View>
                                <View Style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                    <Text style={styles.text}>{data.user}</Text>
                                    <Text style={styles.value}>{value}</Text>
                                </View>
                            </View>
                        </Pressable>
                : null
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 3,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: '7%',
        backgroundColor: 'white',
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 3,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: '7%',
        backgroundColor: '#FEDB37',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 3,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: '7%',
        backgroundColor: 'silver',
    },
    container3: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 3,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: '7%',
        backgroundColor: 'orange',
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    numero: {
        color: 'black',
        fontSize: 30,
        marginHorizontal: 10,
        fontWeight: 'bold',
    },
    value: {
        color: 'black',
        fontSize: 14,
        marginHorizontal: 10,
    },


});

export default ShowTop;

