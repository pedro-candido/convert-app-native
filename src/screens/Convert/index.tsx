import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    TextInput, 
    TouchableWithoutFeedback, 
    Keyboard, 
    KeyboardAvoidingView,
    Alert,
    Platform } 
from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setFirstCurrency, setSecondCurrency, setValueToConvert } from '../../reducers'
import { RootState } from '../../store/configureStore.store';
import { ScrollView } from 'react-native-gesture-handler';
import { Select } from '../../components';

export const Convert = () => {
    const [ isFocused, setIsFocused ] = useState(false)
    const [ value, setValue ] = useState('')
    const state = useSelector((state: RootState )=> state)
    const dispatch = useDispatch()

    const navigation = useNavigation()

    const handleBack = () => navigation.goBack()

    const handleChange = (text: string) => setValue(text)

    const handleConvert = () => {
        if(value === '')
            return alert('Preencha')
        else{
            dispatch(setValueToConvert(value))
            return console.log(state)
        }
    }

    return (
            <KeyboardAvoidingView
            
                behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
            >
            <SafeAreaView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <SafeAreaView>
                            <Text>Valor para converter</Text>
                            <ScrollView>
                                <TextInput 
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                    placeholder="10,00"
                                    keyboardType='numeric'
                                    value={value}
                                    onChangeText={handleChange}
                                />
                            </ScrollView>
                        </SafeAreaView>
                        <View>
                            <SafeAreaView>
                                <Text>Converter de:</Text>
                                <Select />
                            </SafeAreaView>
                            <SafeAreaView>
                                <Text>Converter para:</Text>
                            </SafeAreaView>
                        </View>
                        <SafeAreaView>
                            <TouchableOpacity onPress={handleBack}>
                                <Text>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleConvert}>
                                <Text>Convert</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({

})