import { Text, StyleSheet,TouchableOpacity,Linking } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const LinkButton = ({url,text}) => {
    //cast to string
    return (
        <>
            <TouchableOpacity onPress={() => Linking.openURL(url)} style={styles.container}>
                <Ionicons name="logo-steam" size={24} color="white" />
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
        textAlign: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingVertical: 5,
    },
});

export default LinkButton;