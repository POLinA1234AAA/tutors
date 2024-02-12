// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add logic to send data to the server here
        console.log('Phone:', phone);
        console.log('Password:', password);
        // You can make API calls or navigate to another screen on successful login
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Вхід</Text>

            <TextInput
                style={styles.input}
                placeholder="Телефон"
                onChangeText={(text) => setPhone(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Вхід</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
        width: '100%',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LoginScreen;
