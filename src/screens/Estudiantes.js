import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Data from '../data/info';


const { width } = Dimensions.get('window');


const Estudiantes = ({ navigation }) => {
    const data = Data;

    return (
        <View style={styles.container}>
               
            <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Estudiantes</Text>
            </View>
            <View style={styles.flatListContainer}>
                    <FlatList
                        data={data}
                        numColumns={1}
                        contentContainerStyle={styles.flatListContent}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.title}>{item.nombre}</Text>
                                <Text style={styles.title}>{item.carnet}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>

        </View>
    );
};

export default Estudiantes;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2C34',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 30,
    },
    flatListContainer: {
        flex: 1,
        marginHorizontal: 5,
    },
    flatListContent: {
        flexGrow: 1,
    },
    cardContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        alignItems:'center',
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
    title:{
        alignItems:"center",
        fontWeight:"600",
        fontSize:18,
        color: '#000',
        fontFamily:'sans-serif'
    },
    titleContainer: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFF', 
    },
});
