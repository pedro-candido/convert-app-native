import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, KeyboardAvoidingView, Platform, TextInputTextInputEventData } from 'react-native'

export const Convert = () => {
    const [ isFocused, setIsFocused ] = useState(false)
    const [ value, setValue ] = useState('')

    const navigation = useNavigation()

    const handleBack = () => navigation.goBack()

    const handleChange = (text: string) => setValue(text)

    const handleConvert = () => {
        if(value === '')
            return alert('Preencha')
        else
            return alert('Preenchido')
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <SafeAreaView style={styles.convertContainer}>
                            <Text>Hello World</Text>
                            <TextInput 
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                style={[styles.input, isFocused && styles.isFocused]}
                                placeholder="10,00"
                                keyboardType='numeric'
                                value={value}
                                onChangeText={handleChange}
                            />
                        </SafeAreaView>
                        <SafeAreaView style={styles.buttonsWrapper}>
                            <TouchableOpacity style={styles.button} onPress={handleBack}>
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleConvert} style={styles.button}>
                                <Text style={styles.buttonText}>Convert</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9022ff',
        flex: 1,
        justifyContent: 'space-around',
        width: '100%',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    button: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 4
    },
    buttonText: {
        color: '#9022ff',
        fontWeight: 'bold',
        fontSize: 30
    },
    buttonsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '10%',
    },
    convertContainer: {
        alignContent: 'center',
        alignSelf: 'center',
        height: '80%',
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
    },
})