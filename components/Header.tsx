import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { blob } from 'stream/consumers';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My ToDo</Text>
            <TouchableOpacity>
                <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 85,
        paddingTop: 50,
        backgroundColor: '#5ac1d1',
    },
    title: {
        textAlign: 'center',
        color: '#243538',
        fontSize: 20,
        fontWeight: 'bold',
    },
    login: {
        marginLeft: 310,
        textAlign: 'center',
        marginRight: 15,
        marginTop: -20,
        fontWeight: '600',
        color: '#243538',
    }
})