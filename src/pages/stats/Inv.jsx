import react from "react";
import { useEffect, useState, useRef } from "react";
import { ImageBackground, FlatList, Text, Image, Dimensions, View, StyleSheet, TouchableOpacity, LayoutAnimation, UIManager, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import InventoryApiSteam from "../../api/InventoryApiSteam";
import LinkButton from "../../Components/LinkButton";


const Inv = (props) => {

    const [platformUserId, setPlatformUserId] = useState(
        props.route?.params?.data?.data?.data[0]?.platformUserId
            ? props.route.params.data.data.data[0].platformUserId
            : props.route?.params?.platformUserId
                ? props.route.params.platformUserId
                : "null"
    );
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [expandedItemId, setExpandedItemId] = useState(null);

    const fetchDataOnce = async () => {
        if (!data) {
            InventoryApiSteam(platformUserId).then((data) => {
                setData(data);
                setLoading(false);
            });
        }
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        fetchDataOnce();
    }, []);

    const handleItemPress = (itemId) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const isExpanded = itemId === expandedItemId;
        setExpandedItemId(isExpanded ? null : itemId);
    };


    const renderItem = ({ item, index }) => {
        const isExpanded = index === expandedItemId;
        const itemcolor = item.name_color;
        const marketurl = "https://steamcommunity.com/market/listings/730/" + item.market_hash_name;
        return (
            <TouchableOpacity onPress={() => handleItemPress(index)} style={[styles.itemContainer, isExpanded && styles.itemContainerExpanded]}>
                <Image source={{ uri: `https://community.cloudflare.steamstatic.com/economy/image/${item.icon_url}` }} style={[{ shadowColor: '#'+itemcolor }, styles.itemImage, isExpanded && styles.expandedItemImage]} />
                {isExpanded ?
                    <View style={styles.itemNameContainerExpanded}>
                        <Text style={[styles.itemNameExpanded, { shadowColor: '#' + itemcolor }]}>{item.market_hash_name}</Text>
                        <LinkButton url={marketurl} text="Market" />
                    </View>
                    :
                    <Text style={styles.itemName}>{item.name}</Text>
                }
            </TouchableOpacity>
        );
    };


    return (
        <>
            <LinearGradient colors={["#ffffff", "#ffffff", "#rgba(0,0,0,0.2)"]} style={styles.container}>
                <ImageBackground source={require("../../Img/logo.png")} imageStyle={styles.logoImage} style={styles.backgroundImage}>
                    {isLoading ? (
                        <>
                            <Text>Loading...</Text>
                        </>
                    ) : (
                        <FlatList
                            data={data.descriptions}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderItem}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                </ImageBackground>
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    logoImage: {
        opacity: 0.09,
        resizeMode: "contain",
    },
    itemContainer: {
        minHeight: Dimensions.get("window").height * 0.08,
        width: Dimensions.get("window").width * 0.9,
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginVertical: 5,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,

    },
    itemContainerExpanded: {
        height: Dimensions.get("window").height * 0.28,
        width: Dimensions.get("window").width * 0.9,
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        flexDirection: "row",
    },
    itemImage: {
        width: Dimensions.get("window").width * 0.17,
        height: Dimensions.get("window").width * 0.17,
        resizeMode: "contain",
        marginVertical: 5,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        backgroundColor: "rgba(0,0,0,0.08)",
        shadowOpacity: 0.8,
        shadowRadius: 2,

    },
    expandedItemImage: {
        width: Dimensions.get("window").height * 0.2, // Adjust the expanded image size as per your requirement
        height: Dimensions.get("window").height * 0.2, // Adjust the expanded image size as per your requirement
        resizeMode: "contain",
    },
    itemName: {
        fontSize: 16,
        color: "#000000",
        width: Dimensions.get("window").width * 0.65,
    },
    itemNameExpanded: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 5,
        shadowOpacity: 1,
        shadowRadius: 0.5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    itemNameContainerExpanded: {
        width: Dimensions.get("window").width * 0.45,

    },

});

export default Inv;