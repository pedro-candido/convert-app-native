import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, Text, Image, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native'



export const Home = () => {

    const navigation = useNavigation()

    const handleClick = () => {
        navigation.navigate('Convert')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>Welcome to{'\n'}ConvertApp</Text>
                    <Image
                        style={styles.image}
                        source={require('../../assets/Currency_Flatline.png')}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.9}
                        onPress={handleClick}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9022ff',
        flex: 1,
        justifyContent: 'space-between',
    },
    wrapper:{
        height: '50%',
        flex: 1,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 30
    },
    image: {
        width: 370,
        height: 370
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 4
    },
    buttonText: {
        color: '#9022ff',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 30
    }
})