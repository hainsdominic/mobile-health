import { StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Button, Card, Paragraph } from 'react-native-paper';
import { format, lastDayOfMonth } from 'date-fns';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PatientScreen = ({ route, navigation }: any) => {
    const [nbQuestionnaires, setNbQuesionnaires] = useState(0);
    const { item } = route.params;
    const randomHeight = Math.floor(Math.random() * (195 - 145 + 1)) + 145;
    const randomWeight = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const randomBMI = randomWeight / (randomHeight / 100) ** 2;

    useFocusEffect(() => {
        (async () => {
            // Get patients
            // Get the array of patients
            const value = await AsyncStorage.getItem('patients');

            // Update the patient
            if (value) {
                const data = JSON.parse(value);
                const index = data.findIndex(
                    (patient: any) => patient.id === item.id
                );

                // Set questionnaire count
                if (data[index].questionnaires) {
                    setNbQuesionnaires(data[index].questionnaires.length);
                }
            }
            // Set questionnaire count
        })();
    });

    return (
        <View style={styles.container}>
            <Image
                style={styles.picture}
                source={{
                    uri: 'https://www.thispersondoesnotexist.com/image',
                }}
            />
            <Card style={styles.card}>
                <Card.Content>
                    <Paragraph>First Name: {item.firstName}</Paragraph>
                    <Paragraph>Last Name: {item.lastName}</Paragraph>
                    <Paragraph>
                        Birthday:{' '}
                        {format(new Date(item.birthdate), 'MM/dd/yyyy')}
                    </Paragraph>
                    <Paragraph>Sex at birth: {item.sexAtBirth}</Paragraph>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.imc}>
                        <Paragraph>{randomHeight} cm</Paragraph>
                        <Paragraph>{randomWeight} kg</Paragraph>
                        <Paragraph>IMC: {randomBMI.toPrecision(3)}</Paragraph>
                    </View>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content>
                    <Paragraph>
                        {nbQuestionnaires} questionnaires filled
                    </Paragraph>
                </Card.Content>
            </Card>
            <Button
                style={styles.questionnaire}
                icon="pencil"
                mode="outlined"
                compact
                onPress={() => navigation.navigate('Questionnaire', { item })}
            >
                New questionnaire
            </Button>
        </View>
    );
};

export default PatientScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    picture: {
        borderRadius: 100,
        height: 150,
        width: 150,
    },
    card: {
        marginTop: 30,
        width: 300,
    },
    imc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    questionnaire: {
        marginTop: 30,
    },
});
