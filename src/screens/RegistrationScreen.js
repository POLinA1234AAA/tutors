// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const RegistrationScreen = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegistration = () => {
        // Add validation logic
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        // Add logic to send data to the server here
        console.log('Name:', name);
        console.log('Phone:', phone);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        // You can make API calls or navigate to another screen on successful registration
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Реєстрація</Text>

            <TextInput
                style={styles.input}
                placeholder="Ім'я"
                onChangeText={(text) => setName(text)}
            />

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

            <TextInput
                style={styles.input}
                placeholder="Підтвердити пароль"
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Реєстрація</Text>
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

export default RegistrationScreen;
