import React, { useState, useEffect } from 'react';
import { FlatList, Alert, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import Swipeable from 'react-native-swipeable-row';
import { Item, Input } from 'native-base';

const StudentsScreen = (props) => {
    const { navigation } = props;
    const [data, setData] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchStudents = () => {
        setIsLoading(true);
        StudentsApi // З
            .get()
            .then(({ data }) => {
                setData(data.data);
            })
            .finally((e) => {
                setIsLoading(false);
            });
    };
// пока тут соит апи далее напрямую
    useEffect(fetchStudents, []);

    useEffect(fetchStudents, [navigation.state.params]);

    const onSearch = (e) => {
        setSearchValue(e.nativeEvent.text);
    };

    const removeStudent = (id) => {
        Alert.alert(
            'Удаление',
            'Вы действительно хотите удалить ученика?', // Изменили текст
            [
                {
                    text: 'Отмена',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Удалить',
                    onPress: () => {
                        setIsLoading(true);
                        studentsApi // Замените на соответствующий API для учеников
                            .remove(id)
                            .then(() => {
                                fetchStudents();
                            })
                            .catch(() => {
                                setIsLoading(false);
                            });
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <Container>
            {data && (
                <>
                    <View style={{ padding: 20 }}>
                        <Item style={{ paddingLeft: 15, borderRadius: 30 }} regular>
                            <Input onChange={onSearch} placeholder="Поиск..." />
                        </Item>
                    </View>
                    <FlatList
                        data={data.filter(
                            (item) =>
                                item.fullname
                                    .toLowerCase()
                                    .indexOf(searchValue.toLowerCase()) >= 0
                        )}
                        keyExtractor={(item) => item._id}
                        onRefresh={fetchStudents}
                        refreshing={isLoading}
                        renderItem={({ item }) => (
                            <Swipeable
                                rightButtons={[
                                    <SwipeViewButton style={{ backgroundColor: '#B4C1CB' }}>
                                        <Ionicons name="md-create" size={28} color="white" />
                                    </SwipeViewButton>,
                                    <SwipeViewButton
                                        onPress={removeStudent.bind(this, item._id)} // Изменили вызов функции
                                        style={{ backgroundColor: '#F85A5A' }}
                                    >
                                        <Ionicons name="ios-close" size={48} color="white" />
                                    </SwipeViewButton>
                                ]}
                            >
                                <Student
                                    navigate={navigation.navigate}
                                    item={{
                                        student: item,

                                    }}
                                />
                            </Swipeable>
                        )}
                        renderSectionHeader={({ section: { title } }) => (
                            <SectionTitle>{title}</SectionTitle>
                        )}
                    />
                </>
            )}
            <AddStudentButton onPress={navigation.navigate.bind(this, 'AddStudent')} /> {/* Изменили на 'AddStudent' */}
            <ToggleViewButton onPress={/* Ваша функция для переключения между индивидуальными и группами */}>
                <Ionicons name="md-swap" size={28} color="white" />
            </ToggleViewButton>
        </Container>
    );
};

StudentsScreen.navigationOptions = {
    title: 'Учні', // Изменили заголовок
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8,
    },
};

const AddStudentButton = styled(PlusButton)``; // Стилизуйте кнопку для добавления ученика, используя ваши стили

const ToggleViewButton = styled(TouchableOpacity)`
    position: absolute;
    bottom: 16px;
    right: 16px;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
`;

export default StudentsScreen;
