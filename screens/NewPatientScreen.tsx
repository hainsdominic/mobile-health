import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Subheading, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import { View } from '../components/Themed';
import { RadioButton } from 'react-native-paper/lib/typescript/components/RadioButton/RadioButton';

export default function NewPatient({ navigation }: any) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [sexAtBirth, setSexAtBirth] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const onDateChange = (event: Event, date: Date) => {
        const currentDate = date || birthdate;
        setBirthdate(currentDate);
    };

    return (
        <View style={styles.container}>
            <TextInput
                autoComplete={false}
                placeholder="First Name"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={styles.formElement}
            />
            <TextInput
                autoComplete={false}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(lastName) => setLastName(lastName)}
                style={styles.formElement}
            />
            <Subheading>Birthdate</Subheading>
            <DateTimePicker
                value={birthdate}
                mode="date"
                onChange={onDateChange}
                display="default"
                style={styles.formElement}
            />
            <TextInput
                autoComplete={false}
                placeholder="Sex"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={styles.formElement}
            />
            <TextInput
                autoComplete={false}
                placeholder="Street Address"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={styles.formElement}
            />
            <TextInput
                autoComplete={false}
                placeholder="City"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={styles.formElement}
            />
            <TextInput
                autoComplete={false}
                placeholder="Country"
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                style={styles.formElement}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    formElement: {
        marginVertical: 10,
        width: 200,
    },
});
