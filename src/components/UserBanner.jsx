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
        width: '95%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingVertical: 10,
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
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        textShadowColor: 'rgba(150, 0, 0, 0.55)',

    },
});

export default UserBanner;
