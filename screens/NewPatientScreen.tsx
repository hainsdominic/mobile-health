import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { Button, RadioButton, TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import CountryPicker, { Country } from 'react-native-country-picker-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import DropDown from 'react-native-paper-dropdown';
import { v4 as uuidv4 } from 'uuid';

import { View } from '../components/Themed';

export default function NewPatient({ navigation }: any) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState(new Date());
    // const [sexAtBirth, setSexAtBirth] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState<Country>();

    const [showDropDown, setShowDropDown] = useState(false);
    const [gender, setGender] = useState<string>('Gender');

    const genderList = [
        {
            label: 'Male',
            value: 'male',
        },
        {
            label: 'Female',
            value: 'female',
        },
        {
            label: 'Others',
            value: 'others',
        },
    ];

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
            if (value) {
                const data = JSON.parse(value);
            } else {
                await AsyncStorage.setItem('patients', JSON.stringify([]));
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    const storeData = async () => {
        if (
            firstName === '' ||
            lastName === '' ||
            gender === 'Gender' ||
            streetAddress === '' ||
            city === '' ||
            country === undefined
        ) {
            Alert.alert(
                'Error',
                'You need the fill all the required fields',
                [{ text: 'OK' }],
                {
                    cancelable: true,
                    onDismiss: () =>
                        Alert.alert(
                            'This alert was dismissed by tapping outside of the alert dialog.'
                        ),
                }
            );
        } else {
            try {
                resetField();
                let res = await AsyncStorage.getItem('patients');

                if (res) {
                    let listProfile = JSON.parse(res);
                    listProfile.push({
                        id: uuidv4(),
                        firstName: firstName,
                        lastName: lastName,
                        birthdate: birthdate,
                        sexAtBirth: gender,
                        streetAddress: streetAddress,
                        city: city,
                        country: country?.name,
                    });

                    await AsyncStorage.setItem(
                        'patients',
                        JSON.stringify(listProfile)
                    );
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const resetField = () => {
        setFirstName('');
        setLastName('');
        setGender('Gender');
        setStreetAddress('');
        setCity('');
        setCountry(undefined);
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
            <View style={styles.textContainer}>
                <Text style={styles.text}>Birthdate</Text>
                <DateTimePicker
                    value={birthdate}
                    mode="date"
                    onChange={onDateChange}
                    display="default"
                    style={styles.dataPickerElement}
                />
            </View>
            <View style={styles.formElement}>
                <DropDown
                    label={'Gender'}
                    mode={'outlined'}
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={gender}
                    setValue={setGender}
                    list={genderList}
                />
            </View>

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
            <View style={styles.textContainer}>
                <View style={styles.countryPicker}>
                    <CountryPicker
                        withFlagButton={true}
                        withFlag={true}
                        onSelect={(country: Country) => setCountry(country)}
                    />
                </View>
                {country !== null && <Text>{country?.name}</Text>}
            </View>
            <Button
                style={styles.register}
                mode="contained"
                onPress={async () => await storeData()}
            >
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
        marginTop: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    formElement: {
        marginVertical: 10,
        width: '80%',
    },
    dataPickerElement: {
        marginVertical: 10,
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        alignItems: 'center',
        marginRight: 30,
    },
    textContainer: {
        fontSize: 16,
        marginVertical: 15,
        fontWeight: '600',
        alignItems: 'center',
        flexDirection: 'row',
    },
    countryPicker: {
        backgroundColor: '#dedede',
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
    },
    register: {
        marginTop: 10,
    },
});
function elseif(arg0: boolean) {
    throw new Error('Function not implemented.');
}
