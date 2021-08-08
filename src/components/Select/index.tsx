import { Alert, StyleSheet, TouchableOpacity, View, Modal, Text } from "react-native"
import React, { useState } from 'react'


export const Select = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const openModal = () =>{
        setModalVisible(true)
    }

    const modalOptions = ['-', 'BRL', 'USD', 'EUR']

    return(
        <View>
            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {modalOptions.map((currency: string) => {
                            return(
                                <View style={styles.optionContainer} key={currency}>
                                    <TouchableOpacity>
                                        <Text>{currency}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <Text>Teste</Text>
            </Modal>
            <TouchableOpacity 
                style={styles.container} 
                onPress={openModal}
            />
            <TouchableOpacity onPress={openModal}>
                <Text>Show modal</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#ccc',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,
        alignItems: "center",
        shadowColor: "#000",
        width: '100%',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      optionContainer: {
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          borderTopWidth: 1,
          borderColor: '#ccc'
      }
})

