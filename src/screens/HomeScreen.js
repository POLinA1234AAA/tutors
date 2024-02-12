// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const goToRegistration = () => {
        navigation.navigate('Registration');
    };

    const goToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Добро пожаловать!</Text>

            <TouchableOpacity style={styles.button} onPress={goToRegistration}>
                <Text style={styles.buttonText}>Регистрация</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={goToLogin}>
                <Text style={styles.buttonText}>Вход</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default HomeScreen;
