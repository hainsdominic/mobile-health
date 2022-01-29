import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, RadioButton, Text, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View } from '../components/Themed';

export default function NewPatient({ navigation }: any) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    const [sexAtBirth, setSexAtBirth] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState<Country>();

    const onDateChange = (event: Event, date: Date) => {
        const currentDate = date || birthdate;
        setBirthdate(currentDate);
    };

    useEffect(() => {
        (async () => {
            await retrieveData();
        })();
    }, []);

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('patients');
            if (value !== null) {
                const data = JSON.parse(value);
                console.log(data);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    const storeData = async () => {
        try {
            await AsyncStorage.mergeItem(
                'patients',
                JSON.stringify([
                    {
                        firstName,
                        lastName,
                        birthdate,
                        sexAtBirth,
                        streetAddress,
                        city,
                        country,
                    },
                ])
            );
        } catch (error) {
            console.error(error);
        }
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
            <Text>Birthdate</Text>
            <DateTimePicker
                value={birthdate}
                mode="date"
                onChange={onDateChange}
                display="default"
                style={styles.formElement}
            />
            <RadioButton.Group
                onValueChange={(sexAtBirth: string) =>
                    setSexAtBirth(sexAtBirth)
                }
                value={sexAtBirth}
            >
                <View style={styles.formElement}>
                    <Text>Male</Text>
                    <RadioButton value="Male" />
                    <Text>Female</Text>
                    <RadioButton value="Female" />
                </View>
            </RadioButton.Group>
            <TextInput
                autoComplete={false}
                placeholder="Street Address"
                value={streetAddress}
                onChangeText={(streetAddress) =>
                    setStreetAddress(streetAddress)
                }
                style={styles.formElement}
            />
            <TextInput
                autoComplete={false}
                placeholder="City"
                value={city}
                onChangeText={(city) => setCity(city)}
                style={styles.formElement}
            />
            <Text>Country</Text>
            <CountryPicker
                withFlagButton={true}
                withFlag={true}
                onSelect={(country: Country) => setCountry(country)}
            />
            {country !== null && <Text>{country?.name}</Text>}
            <Button mode="contained" onPress={async () => await storeData()}>
                Register New Patient
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    formElement: {
        marginVertical: 10,
        width: 200,
    },
});
