import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { View } from '../components/Themed';

export default function NewPatient({ navigation }: any) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [sex, setSex] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    
    return (
        <View style={styles.container}>
            <TextInput autoComplete={false} placeholder='First Name' value={firstName} onChangeText={firstName => setFirstName(firstName)} style={styles.formElement} />
            <TextInput autoComplete={false} placeholder='Last Name' value={lastName} onChangeText={lastName => setLastName(lastName)} style={styles.formElement} />
            <TextInput autoComplete={false} placeholder='Birthdate' value={birthdate} onChangeText={birthdate => setBirthdate(birthdate)} style={styles.formElement} />
            <TextInput autoComplete={false} placeholder='Sex' value={firstName} onChangeText={firstName => setFirstName(firstName)} style={styles.formElement} />
            <TextInput autoComplete={false} placeholder='Street Address' value={firstName} onChangeText={firstName => setFirstName(firstName)} style={styles.formElement} />
            <TextInput autoComplete={false} placeholder='City' value={firstName} onChangeText={firstName => setFirstName(firstName)} style={styles.formElement} />
            <TextInput autoComplete={false} placeholder='Country' value={firstName} onChangeText={firstName => setFirstName(firstName)} style={styles.formElement} />
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
        width: 100 
    }

});
