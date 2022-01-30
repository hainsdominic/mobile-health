import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, Headline } from 'react-native-paper';

const QuestionnaireScreen = ({ route, navigation }: any) => {
    const [BPIPainWorst, setBPIPainWorst] = useState(5);
    const [BPIPainLeast, setBPIPainLeast] = useState(5);
    const [BPIPainAverage, setBPIPainAverage] = useState(5);
    const [BPIPainNow, setBPIPainNow] = useState(5);
    const [BPIGeneralActivity, setBPIGeneralActivity] = useState(5);
    const [BPIMood, setBPIMood] = useState(5);
    const [BPIWalking, setBPIWalking] = useState(5);
    const [BPIWork, setBPIWork] = useState(5);
    const [BPIRelations, setBPIRelations] = useState(5);
    const [BPISleep, setBPISleep] = useState(5);
    const [BPIEnjoyment, setBPIEnjoyment] = useState(5);

    const { item } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container} bounces={false}>
            <Headline style={styles.title}>The Brief Pain Inventory</Headline>
            <View style={styles.question}>
                <Text>
                    Select the one number that best describes your pain at its
                    WORST in the last 7 days, from no pain (0) to the worst
                    possible pain (10): {BPIPainWorst}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIPainWorst}
                    onValueChange={(value: any) => setBPIPainWorst(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the one number that best describes your pain at its
                    LEAST in the last 7 days: {BPIPainLeast}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIPainLeast}
                    onValueChange={(value: any) => setBPIPainLeast(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the one number that best describes your pain on
                    AVERAGE in the last 7 days: {BPIPainAverage}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIPainAverage}
                    onValueChange={(value: any) => setBPIPainAverage(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the one number that best describes your pain RIGHT
                    NOW: {BPIPainNow}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIPainNow}
                    onValueChange={(value: any) => setBPIPainNow(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the one number that describes how, during the past 7
                    days, pain has interfered with your general activity:{' '}
                    {BPIGeneralActivity}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIGeneralActivity}
                    onValueChange={(value: any) =>
                        setBPIGeneralActivity(value[0])
                    }
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the one number that describes how, during the past 7
                    days, pain has interfered with your mood: {BPIMood}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIMood}
                    onValueChange={(value: any) => setBPIMood(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the one number that describes how, during the past 7
                    days, pain has interfered with your walking ability:{' '}
                    {BPIWalking}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIWalking}
                    onValueChange={(value: any) => setBPIWalking(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the one number that describes how, during the past 7
                    days, pain has interfered with your normal work (includes
                    both work outside the home and housework): {BPIWork}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIWork}
                    onValueChange={(value: any) => setBPIWork(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the number that describes how, during the past 7
                    days, pain has interfered with your relations with other
                    people: {BPIPainWorst}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIRelations}
                    onValueChange={(value: any) => setBPIRelations(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the number that describes how, during the past 7
                    days, pain has interfered with your sleep: {BPISleep}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPISleep}
                    onValueChange={(value: any) => setBPISleep(value[0])}
                />
            </View>
            <View style={styles.question}>
                <Text>
                    Select the number that describes how, during the past 7
                    days, pain has interfered with your enjoyment of life:{' '}
                    {BPIEnjoyment}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={BPIEnjoyment}
                    onValueChange={(value: any) => setBPIEnjoyment(value[0])}
                />
            </View>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={async () => {
                    const questionnaire = {
                        date: new Date(),
                        BPIPainWorst,
                        BPIPainLeast,
                        BPIPainAverage,
                        BPIPainNow,
                        BPIGeneralActivity,
                        BPIMood,
                        BPIWalking,
                        BPIWork,
                        BPIRelations,
                        BPISleep,
                        BPIEnjoyment,
                    };

                    // Get the array of patients
                    const value = await AsyncStorage.getItem('patients');

                    // Update the patient
                    if (value) {
                        const data = JSON.parse(value);
                        const index = data.findIndex(
                            (patient: any) => patient.id === item.id
                        );
                        if (data[index].questionnaires) {
                            data[index].questionnaires.push(questionnaire);
                        } else {
                            data[index].questionnaires = [questionnaire];
                        }
                        // Save the array
                        await AsyncStorage.setItem(
                            'patients',
                            JSON.stringify(data)
                        );
                        // Go back
                        navigation.goBack();
                    }
                }}
            >
                Complete
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingBottom: 100,
    },
    title: {
        textAlign: 'center',
        marginTop: 15,
    },
    question: {
        width: '80%',
        marginTop: 15,
    },
    button: {
        marginTop: 35,
    },
});

export default QuestionnaireScreen;
