import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function addTodo( {submitHandler} ) {

    const [text, setText] = useState ('');

    const changeHandler = (val) => {
        setText(val);
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='New Todo'
                onChangeText={changeHandler}
            />
            <View style={styles.button}>
                <AntDesign name='pluscircle' style={styles.buttonIcon} size={24} color="white" />
                <Button onPress={() => submitHandler (text)} title='Add Todo' color='white' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    button: {
        backgroundColor: '#5ac1d1',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 100,
    },
    buttonIcon: {
        //flex: ,
    }
})