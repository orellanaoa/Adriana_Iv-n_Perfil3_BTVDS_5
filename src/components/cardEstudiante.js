import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const StudentCard = ({ item }) => (
    <View style={styles.cardContainer}>
        <Image source={item.src} style={styles.image} />
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.title}>{item.carnet}</Text>
    </View>
);

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: width - 20, // Hace que la tarjeta ocupe todo el ancho con un pequeño margen
        marginHorizontal: 10, // Agrega un pequeño margen horizontal
    },
    image: {
        width: 300,
        height: 250,
        marginBottom: 10,
        borderRadius: 10,
    },
    title: {
        alignItems: "center",
        fontWeight: "600",
        fontSize: 18,
        color: '#000',
        fontFamily: 'sans-serif'
    },
});

export default StudentCard;
