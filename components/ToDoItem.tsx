import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ToDoItem({item, pressHandler}) {
    return(
        <View style={style.container}>
            <View style={style.items}>
                <Text style={style.itemText}>{item.text}</Text>
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <MaterialIcons style={style.deleteIcon} name='done' size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        //flex: 1,
        //flexDirection: 'row', // Horizontal flex direction
    },
    items: {
        flexDirection: 'row', // Arrange Text and Icon side by side
        alignItems: 'center', // Center items vertically
        marginTop: 16,
        padding: 16,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
    },
    itemText: {
        flex: 1, // Make the text take up remaining space
        fontSize: 18,
      },
      deleteIcon: {
        marginLeft: 10, // Add some margin to the icon
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
      },
})