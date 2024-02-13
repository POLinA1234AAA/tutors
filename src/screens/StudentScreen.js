import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator, Linking } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import {
    Button,
    Container,
    Appointment,
    PlusButton
} from '../components';



const StudentScreen = ({ navigation }) => {
    const [lessons, setLessons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const id = navigation.getParam('student')._id;
        studentsApi //
            .show(id)
            .then(({ data }) => {
                setLessons(data.data.lessons);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StudentDetails>
                <StudentFullname>
                    {navigation.getParam('student', {}).fullname}
                </StudentFullname>
                <GrayText>
                    {phoneFormat(navigation.getParam('student', {}).phone)}
                </GrayText>
            </StudentDetails>

            <StudentLessons>
                <Container>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="#2A86FF" />
                    ) : (
                        lessons.map(lesson => (
                            <LessonCard key={lesson._id}>
                                <LessonCardRow>
                                    <Ionicons name="md-school" size={16} color="#A3A3A3" />
                                    <LessonCardLabel>
                                        Цена:{' '}
                                        <Text style={{ fontWeight: '600' }}>
                                            {lesson.subject}
                                        </Text>
                                    </LessonCardLabel>
                                </LessonCardRow>
                                <LessonCardRow>
                                    <Ionicons name="md-calendar" size={16} color="#A3A3A3" />
                                    <LessonCardLabel>
                                        Дата:{' '}
                                        <Text style={{ fontWeight: '600' }}>
                                            {lesson.date}
                                        </Text>
                                    </LessonCardLabel>
                                </LessonCardRow>
                                <LessonCardRow
                                    style={{ marginTop: 15, justifyContent: 'space-between' }}
                                >
                                    <Badge style={{ width: 155 }} active>
                                        {lesson.time}
                                    </Badge>
                                    <Badge color="green">{lesson.status}</Badge>
                                </LessonCardRow>
                            </LessonCard>
                        ))
                    )}
                </Container>
            </StudentLessons>
            <PlusButton // Изменили на 'AddLesson'
                onPress={navigation.navigate.bind(this, 'AddLesson', {
                    studentId: navigation.getParam('student', {})._id
                })}
            />
        </View>
    );
};

const LessonCardLabel = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`;

const LessonCardRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 3.5px;
  margin-bottom: 3.5px;
`;

const LessonCard = styled.View`
  shadow-color: gray;
  
  shadow-opacity: 0.4;
  shadow-radius: 10;
  padding: 20px 25px;
  border-radius: 10px;
  background: white;
  margin-bottom: 20px;
`;

const StudentDetails = styled(Container)`
  flex: 0.3;
`;

const StudentLessons = styled.View`
  flex: 1;
  background: #f8fafd;
`;

const StudentFullname = styled.Text`
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 3px;
`;

StudentScreen.navigationOptions = {
    title: 'Карта учня', // Изменили заголовок
    headerTintColor: '#2A86FF',
    headerStyle: {
        elevation: 0.8,
        shadowOpacity: 0.8
    }
};

export default StudentScreen;
