import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'

export const Convert = () => {
    const [ isFocused, setIsFocused ] = useState(false)

    const navigation = useNavigation()

    const handleBack = () => navigation.goBack()

    return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.convertContainer}>
                <Text>Hello World</Text>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <TextInput
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            style={[styles.input, isFocused && styles.isFocused]}
                            placeholder="10,00"
                            keyboardType='numeric'
                        />
                    </TouchableWithoutFeedback>
            </SafeAreaView>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity style={styles.button} onPress={handleBack}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Convert</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9022ff',
        flex: 1,
        justifyContent: 'space-evenly',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        fontSize: 30
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
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginBottom: '10%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    convertContainer: {
        alignContent: 'center',
        fontFamily: 'Arial',
        alignSelf: 'center',
        height: '100%',
        flexDirection: 'column',
    },
    input: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#fff',
        color: '#0c0c0c',
        fontWeight: 'bold',
        minWidth: '80%',
    },
    isFocused: {
        color: 'purple',
    }
})