import React from "react";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const LinksAbout = (props) => {
    return (
        <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name={props.ico} size={30} color="black" />
                <Text style={{ fontSize: 16, marginLeft: 10 }}>{props.text}</Text>
            </View>
        </>
    );
};

export default LinksAbout;