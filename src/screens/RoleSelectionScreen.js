// RoleSelectionScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RoleSelectionScreen = () => {
    const navigation = useNavigation();

    const handleTeacherPress = () => {
        // Обработка нажатия кнопки "Вчитель"
        // Переходите на страницу для учителя или выполняйте необходимые действия
    };

    const handleManagerPress = () => {
        // Обработка нажатия кнопки "Менеджер"
        // Переходите на страницу для менеджера или выполняйте необходимые действия
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>LessonX App</Text>
            <Text style={{ fontSize: 18, marginVertical: 20 }}>Хто ви?</Text>
            <TouchableOpacity onPress={handleTeacherPress} style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 20, color: 'blue' }}>Вчитель</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleManagerPress}>
                <Text style={{ fontSize: 20, color: 'green' }}>Менеджер</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RoleSelectionScreen;
