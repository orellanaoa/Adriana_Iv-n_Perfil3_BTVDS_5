import React from 'react';
import { View, Text, Dimensions, FlatList, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Comida } from '../data/comidas';
    //Referencia del archivo cardComida, donde guardamos el estilo de las cards
import CardComida from '../components/cardComida.js';

const { width } = Dimensions.get('window');

const Comidas = () => {
    const cardWidth = (width - 60) / 2;


    const renderComida = ({ item }) => <CardComida item={item} cardWidth={cardWidth} />;

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
    nombre: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#000',
        marginBottom: 10,
    }

    //Ya no se muestran los estilos de las cards, ya que están en su propio archivo.
});
