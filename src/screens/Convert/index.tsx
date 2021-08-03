import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Picker } from 'react-native'

export const Convert = () => {
    const [ isFocused, setIsFocused ] = useState(false)
    const [ value, setValue ] = useState('')
    const [ firstCurrency, setFirstCurrency ] = useState('')
    const [ secondCurrency, setSecondCurrency ] = useState('')

    const navigation = useNavigation()

    const handleBack = () => navigation.goBack()

    const handleChange = (text: string) => setValue(text)

    const handleConvert = () => {
        if(value === '')
            return alert('Preencha')
        else
            return alert('Preenchido')
    }

    const handleFirstPickerChange = (text: string) => {
        setFirstCurrency(text)
    }

    const handleSecondPickerChange = (text: string) => {
        setSecondCurrency(text)
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <SafeAreaView style={styles.convertContainer}>
                            <Text style={styles.title}>Valor para converter</Text>
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
                        <View style={styles.convertTo}>
                            <SafeAreaView>
                                <Text>Converter de:</Text>
                                <Picker 
                                    style={styles.picker}
                                    selectedValue={firstCurrency}
                                    onValueChange={handleFirstPickerChange}
                                >
                                    <Picker.Item label="-" value="" />
                                    <Picker.Item label="Real" value="BRL" />
                                    <Picker.Item label="Dolar" value="USD" />
                                    <Picker.Item label="Euro" value="EUR" />
                                </Picker>
                            </SafeAreaView>
                            <SafeAreaView>
                                <Text>Converter para:</Text>
                                <Picker 
                                    style={styles.picker}
                                    selectedValue={secondCurrency}
                                    onValueChange={handleSecondPickerChange}
                                >
                                    <Picker.Item label="-" value="BRL" />
                                    <Picker.Item label="Real" value="BRL" />
                                    <Picker.Item label="Dolar" value="USD" />
                                    <Picker.Item label="Euro" value="EUR" />
                                </Picker>
                            </SafeAreaView>
                        </View>
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
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
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
    },
    convertContainer: {
        alignContent: 'center',
        alignSelf: 'center',
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
        fontSize: 24
    },
    isFocused: {
        color: 'purple',
    },
    content: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        height: '90%'
    },
    convertTo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    picker: {
        color: '#fff'
    },
    pickerItem: {
        color: '#fff'
    }
})