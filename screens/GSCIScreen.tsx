import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDown from 'react-native-paper-dropdown';
import { Button, Headline } from 'react-native-paper';
import BooleanDropdown from './questionnaire/BooleanDropdown';

const GSCIScreen = ({ route, navigation }: any) => {
    const { item } = route.params;
    const [primaryLocation, setPrimaryLocation] = useState<string | null>(null);
    const [showPrimaryLocationDropDown, setPrimaryLocationShowDropDown] =
        useState(false);

    const [symptomsDuration, setSymptomsDuration] = useState<string | null>(
        null
    );
    const [showSymptomsDurationDropDown, setSymptomsDurationShowDropDown] =
        useState(false);

    const [conditionEvolving, setConditionEvolving] = useState<string | null>(
        null
    );
    const [showConditionEvolvingDropDown, setConditionEvolvingShowDropDown] =
        useState(false);

    const [painIntesity, setPainIntesity] = useState<number>(5);

    const [symptomsDifficulty, setSymptomsDifficulty] = useState<string | null>(
        null
    );
    const [showSymptomsDifficultyDropDown, setSymptomsDifficultyShowDropDown] =
        useState(false);

    const [cancerHistory, setCancerHistory] = useState<string | null>(null);
    const [infectionHistory, setInfectionHistory] = useState<string | null>(
        null
    );
    const [osteoporosisHistory, setOsteoporosisHistory] = useState<
        string | null
    >(null);
    const [jointHistory, setJointHistory] = useState<string | null>(null);
    const [neurologicalHistory, setNeurologicalHistory] = useState<
        string | null
    >(null);

    const [spinalDeformity, setSpinalDeformity] = useState<string | null>(null);
    const [showSpinalDeformityDropDown, setSpinalDeformityShowDropDown] =
        useState(false);

    const [recentTrauma, setRecentTrauma] = useState<string | null>(null);

    const [numbness, setNumbness] = useState<string | null>(null);
    const [weakness, setWeakness] = useState<string | null>(null);
    const [gaitDifficulty, setGaitDifficulty] = useState<string | null>(null);
    const [bowelProblems, setBowelProblems] = useState<string | null>(null);
    const [radiate, setRadiate] = useState<string | null>(null);
    return (
        <ScrollView contentContainerStyle={styles.container} bounces={false}>
            <Headline style={styles.title}>GSCI Classification</Headline>
            <Text style={styles.subtitle}>
                Primary location of spinal disorder
            </Text>
            <View style={styles.question}>
                <DropDown
                    label={
                        'Where in the spine does the person have symptoms or concerns?'
                    }
                    visible={showPrimaryLocationDropDown}
                    showDropDown={() => setPrimaryLocationShowDropDown(true)}
                    onDismiss={() => setPrimaryLocationShowDropDown(false)}
                    value={primaryLocation}
                    setValue={setPrimaryLocation}
                    list={[
                        { label: 'Neck', value: 'Neck' },
                        { label: 'Mid-back', value: 'Mid-back' },
                        { label: 'Low Back', value: 'Low Back' },
                    ]}
                />
            </View>
            <Text style={styles.subtitle}>Duration & Evolution</Text>
            <View style={styles.question}>
                <DropDown
                    label={'How long has the person had the symptoms?'}
                    visible={showSymptomsDurationDropDown}
                    showDropDown={() => setSymptomsDurationShowDropDown(true)}
                    onDismiss={() => setSymptomsDurationShowDropDown(false)}
                    value={symptomsDuration}
                    setValue={setSymptomsDuration}
                    list={[
                        {
                            label: 'Less than 3 months (Acute)',
                            value: 'Less than 3 months (Acute)',
                        },
                        {
                            label: 'More than 3 months (Chronic)',
                            value: 'More than 3 months (Chronic)',
                        },
                    ]}
                />
            </View>
            <View style={styles.question}>
                <DropDown
                    label={'How is the overall condition evolving?'}
                    visible={showSymptomsDifficultyDropDown}
                    showDropDown={() => setSymptomsDifficultyShowDropDown(true)}
                    onDismiss={() => setSymptomsDifficultyShowDropDown(false)}
                    value={symptomsDifficulty}
                    setValue={setSymptomsDifficulty}
                    list={[
                        {
                            label: 'None-progressive',
                            value: 'None-progressive',
                        },
                        {
                            label: 'Slowly progressive',
                            value: 'Slowly progressive',
                        },
                        {
                            label: 'Rapidly progressive',
                            value: 'Rapidly progressive',
                        },
                    ]}
                />
            </View>
            <Text style={styles.subtitle}>
                Pain Intensity / Activity limitation
            </Text>
            <View style={styles.question}>
                <Text>
                    Select the one number that best describes your pain at its
                    WORST in the last 7 days, from no pain (0) to the worst
                    possible pain (10): {painIntesity}
                </Text>
                <Slider
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={painIntesity}
                    onValueChange={(value: any) => setPainIntesity(value[0])}
                />
            </View>

            <View style={styles.question}>
                <DropDown
                    label={
                        'How much do symptoms cause difficulty with normal activities?'
                    }
                    visible={showConditionEvolvingDropDown}
                    showDropDown={() => setConditionEvolvingShowDropDown(true)}
                    onDismiss={() => setConditionEvolvingShowDropDown(false)}
                    value={conditionEvolving}
                    setValue={setConditionEvolving}
                    list={[
                        {
                            label: 'None',
                            value: 'None',
                        },
                        {
                            label: 'Person can do most but not all normal activities',
                            value: 'Person can do most but not all normal activities',
                        },
                        {
                            label: 'Person has difficulty doing most activities',
                            value: 'Person has difficulty doing most activities',
                        },
                    ]}
                />
            </View>

            <Text style={styles.subtitle}>
                Risk of serious spinal or systemic pathology
            </Text>

            <View style={styles.question}>
                <BooleanDropdown
                    state={cancerHistory}
                    setState={setCancerHistory}
                    label={
                        'Is there a history of cancer in past 5 years or related red flags?'
                    }
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={infectionHistory}
                    setState={setInfectionHistory}
                    label={
                        'Is there a history of prior infection such as TB or HIV, use intravenous drug use or persistent or unexplained fever?'
                    }
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={osteoporosisHistory}
                    setState={setOsteoporosisHistory}
                    label={
                        'Is there an history of osteoporosis or long term use of corticosteroid? '
                    }
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={jointHistory}
                    setState={setJointHistory}
                    label={
                        'Is there a history of Inflammatory or rheumatoid joint disease?'
                    }
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={neurologicalHistory}
                    setState={setNeurologicalHistory}
                    label={
                        'Is there a history of or suspected serious neurological disease?'
                    }
                />
            </View>
            <Text style={styles.subtitle}>Structural Spinal Pathology</Text>
            <View style={styles.question}>
                <DropDown
                    label={
                        'Does the person have a spinal deformity, scoliosis or kyphosis?'
                    }
                    visible={showSpinalDeformityDropDown}
                    showDropDown={() => setSpinalDeformityShowDropDown(true)}
                    onDismiss={() => setSpinalDeformityShowDropDown(false)}
                    value={spinalDeformity}
                    setValue={setSpinalDeformity}
                    list={[
                        {
                            label: 'No',
                            value: 'No',
                        },
                        {
                            label: 'Yes ; appear stable or not causing pain',
                            value: 'Yes ; appear stable or not causing pain',
                        },
                        {
                            label: 'Yes ; getting worst or causing pain',
                            value: 'Yes ; getting worst or causing pain',
                        },
                    ]}
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={recentTrauma}
                    setState={setRecentTrauma}
                    label={
                        'Has the person experienced a recent trauma, such as a serious accident or fall?'
                    }
                />
            </View>
            <Text style={styles.subtitle}>
                Neurologial symptoms or deficits
            </Text>
            <View style={styles.question}>
                <BooleanDropdown
                    state={numbness}
                    setState={setNumbness}
                    label={
                        'Does the person present with numbness or tingling in the arms or legs?'
                    }
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={weakness}
                    setState={setWeakness}
                    label={
                        'Does the person present with muscle weakness in the arms or legs?'
                    }
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={gaitDifficulty}
                    setState={setGaitDifficulty}
                    label={
                        'Does the person present with gait difficulty or loss of balance?'
                    }
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={bowelProblems}
                    setState={setBowelProblems}
                    label={
                        'Does the person present with a new onset of bladder or bowel problems?'
                    }
                />
            </View>
            <View style={styles.question}>
                <BooleanDropdown
                    state={radiate}
                    setState={setRadiate}
                    label={
                        'Do pain or neurological symptoms radiate beyond the spine? '
                    }
                />
            </View>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={async () => {
                    const questionnaire = {
                        date: new Date(),
                        //donnees
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
        // backgroundColor: '#fff',
        paddingBottom: 100,
    },
    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 25,
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

export default GSCIScreen;
