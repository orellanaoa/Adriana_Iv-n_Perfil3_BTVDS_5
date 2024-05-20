import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardComida = ({ item, cardWidth }) => (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
        <Image source={item.src} style={styles.image} />
        <Text style={styles.title}>{item.nombre}</Text>
        <Text style={styles.descripcion}>{item.descripcion}</Text>
    </View>
);

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#DEA47E',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        textAlign: 'center'
    },
    descripcion: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        color: '#FFF'
    },
});

export default CardComida;
