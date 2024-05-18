import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Importamos las pantallas
import Estudiantes from './src/screens/Estudiantes';
import Comidas from './src/screens/Comidas';
import Home from './src/screens/Home';
import { Colors } from "react-native/Libraries/NewAppScreen";

//Variable para usar la libreria
const Tab = createBottomTabNavigator();
//Funcion que nos ayuda a crear la navegacion entre las paginas
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple'
            }}
        >
             <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Estudiantes"
                component={Estudiantes}
                options={{
                    tabBarLabel: 'Estudiantes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-multiple" size={28} color="black" />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Comidas"
                component={Comidas}
                options={{
                    tabBarLabel: 'Comida',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart-circle" size={24} color="black" />
                    ),
                    headerShown: false,
                }}
            />
           
        </Tab.Navigator>
    );
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
