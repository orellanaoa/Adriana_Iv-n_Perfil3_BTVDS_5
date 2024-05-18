import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Comida } from '../data/comidas';

const { width } = Dimensions.get('window');

const Comidas = () => {

    const cardWidth = (width - 60) / 2;

    const renderComida = ({ item }) => (
        <View style={[styles.cardContainer, { width: cardWidth }]}>
            <Image source={item.src} style={styles.image} />
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.descripcion}>{item.descripcion}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Listado de comidas favoritas</Text>
            </View>
            {Comida.map((estudiante, index) => (
                <View key={index} style={styles.studentSection}>
                    <Text style={styles.nombre}>{estudiante.nombreEstudiante}</Text>
                    <FlatList
                        data={estudiante.comidas}
                        horizontal={true}
                        contentContainerStyle={styles.flatListContent}
                        renderItem={renderComida}
                        keyExtractor={(item) => item.id.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

export default Comidas;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 30,
    },
    titleContainer: {
        backgroundColor: '#CD4631',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    studentSection: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    flatListContent: {
        flexGrow: 1,
    },
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
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000',
        marginBottom: 10,
    }
});
