import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Headline, Subheading } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Text, View } from '../components/Themed';
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen({ navigation }: any) {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');

    useFocusEffect(() => {
        (async () => {
            await retrieveData();
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
                <Subheading style={styles.stats}>Patients: 69</Subheading>
                <Subheading style={styles.stats}>Forms filled: 420</Subheading>
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
                onPress={() => console.log('Pressed')}
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
});
