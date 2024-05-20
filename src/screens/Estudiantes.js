import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Data from '../data/info';
//llamamos al componente de las cards para los estudiantes
import StudentCard from '../components/cardEstudiante';

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
                    renderItem={({ item }) => <StudentCard item={item} />}
                    keyExtractor={(item) => item.id.toString()}
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

    //Ya no se muestran los atributos que corresponden a las cards, ya que se encuentran en su propio archivo .js
});
