import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const image = require('../img/gatito.jpg'); 

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>¡Bienvenido, gracias por estar aquí!</Text>
            <Text style={styles.descripcion}>En está aplicación encontrarás diferentes apartados para poder conocer un poco más a cerca de Adriana e Iván</Text>
            <Image source={image} style={styles.image} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9E6240',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 30,
    },
    titulo: {
        fontWeight: '800',
        fontSize: 20,
        color: '#FFF'
    },
    descripcion: {
        marginTop: 10,
        fontWeight: '600',
        fontSize: 14,
        color: '#FFF'
    },
    image: {
        width: 300,
        height: 250,
        marginTop:20,
        borderRadius: 200,
    },
});
