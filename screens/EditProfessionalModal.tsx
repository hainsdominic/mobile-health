import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfessionalModal = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');

    useEffect(() => {
        (async () => {
            await retrieveData();
        })();
    }, []);

    const storeData = async () => {
        try {
            await AsyncStorage.setItem(
                'professional',
                JSON.stringify({ name, profession })
            );
            navigation.goBack();
        } catch (error) {
            console.error(error);
        }
    };

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('professional');
            if (value !== null) {
                const data = JSON.parse(value);
                setName(data.name);
                setProfession(data.profession);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                autoComplete={false}
                label="Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.textInput}
                autoComplete={false}
                label="Profession"
                value={profession}
                onChangeText={(text) => setProfession(text)}
            />
            <Button
                icon="update"
                mode="contained"
                onPress={async () => await storeData()}
            >
                update
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textInput: {
        width: 270,
        height: 60,
        marginVertical: 20,
    },
});

export default EditProfessionalModal;
