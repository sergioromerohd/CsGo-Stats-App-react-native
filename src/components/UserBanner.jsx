import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const UserBanner = ({ data }) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: data.data[0].avatarUrl,
          }}
        />
        <Text style={styles.text}>{data.data[0].platformUserHandle}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 275,
        height: 75,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'gray',
        },
    image: {
        width: 65,
        height: 65,
        marginTop: 5,
        marginLeft: 5,
        borderRadius: 50,
        borderWidth: 1,
    },
    text: {
        flex: 1,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#000000",
    },
});

export default UserBanner;
