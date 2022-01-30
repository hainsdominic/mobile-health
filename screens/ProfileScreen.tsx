import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Button, Headline, ProgressBar, Subheading } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, View } from '../components/Themed';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen({ navigation }: any) {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [nbPatients, setNbPatients] = useState(0);
    const [nbQuestionnaires, setNbQuestionnaires] = useState(0);

    useFocusEffect(() => {
        (async () => {
            await retrieveData();

            // Get patients
            // Get the array of patients
            const value = await AsyncStorage.getItem('patients');

            if (value) {
                const data = JSON.parse(value);
                if (data) {
                    setNbPatients(data.length);
                    let totalQuestionnaireCount = 0;
                    for (let i = 0; i < data.length; i++) {
                        const patient = data[i];
                        if (patient.questionnaires) {
                            totalQuestionnaireCount +=
                                patient.questionnaires.length;
                        }
                    }
                    setNbQuestionnaires(totalQuestionnaireCount);
                }
            }
        })();
    });

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('professional');
            if (value !== null) {
                const data = JSON.parse(value);
                setName(data.name);
                setProfession(data.profession);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteAllPatients = async () => {
        await AsyncStorage.removeItem('patients');
    };

    const uploadPatients = async () => {
        Alert.alert(
            'Patient Upload',
            'Uploaded patients to the server',
            [{ text: 'OK' }],
        );
    };

    return (
        <View style={styles.container}>
            <Headline style={styles.name}>{name}</Headline>
            <Subheading style={styles.profession}>{profession}</Subheading>
            <Button
                style={styles.edit}
                icon="pencil"
                mode="outlined"
                compact
                onPress={() => navigation.navigate('EditProfessionalModal')}
            >
                {name == '' ? 'Fill in your data' : 'edit'}
            </Button>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.statsContainer}>
                <Subheading style={styles.stats} onPress={deleteAllPatients}>
                    Patients: {nbPatients}
                </Subheading>
                <Subheading style={styles.stats}>
                    Forms filled: {nbQuestionnaires}
                </Subheading>
            </View>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <Button
                style={styles.edit}
                icon="upload"
                mode="contained"
                onPress={uploadPatients}
            >
                upload data
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 35,
        lineHeight: 37,
    },
    profession: {
        fontSize: 20,
        lineHeight: 20,
        marginVertical: 20,
    },
    edit: {},
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    stats: {},
    statsContainer: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: '100%',
        height: 75,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progress: {
        height: 100,
        width: '50%',
    },
});
