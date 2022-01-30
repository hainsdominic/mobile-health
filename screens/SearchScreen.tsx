import {
    StatusBar,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import React, { useState, SetStateAction, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Searchbar } from 'react-native-paper';

import { format } from 'date-fns';

import { Text, View } from '../components/Themed';

export default function SearchScreen({ navigation }: any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [listOfProfiles, setListOfProfiles] = useState<any>();
    const [filteredList, setFilteredList] = useState<any>();

    const onChangeSearch = (query: string) => {
        setSearchQuery(query);

        let tempList = listOfProfiles.filter((profile: any) => {
            let fullName = profile.firstName + ' ' + profile.lastName;
            fullName = fullName.toLowerCase();
            if (fullName.includes(query.toLocaleLowerCase(), 0)) {
                return profile;
            }
        });
        setFilteredList(tempList);
        if (query.length === 0) {
            setFilteredList([]);
        }
    };

    // FIXME: Code repetition, move this function into a file
    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('patients');
            if (value) {
                const data = JSON.parse(value);
                setListOfProfiles(data);
            } else {
                await AsyncStorage.setItem('patients', JSON.stringify([]));
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    useEffect(() => {
        retrieveData();
    }, []);

    const renderItem = ({ item }: any) => {
        let newDate: [] = item.birthdate.split('T')[0].split('-');
        let listDate = Object.values(newDate);

        let test = format(
            new Date(
                Number(listDate[2]),
                Number(listDate[1]),
                Number(listDate[0])
            ),
            'MM/dd/yyyy'
        );
        return (
            <TouchableOpacity
                style={styles.patientButton}
                onPress={() => console.log(item.id)}
            >
                <Text>
                    {item.firstName} {item.lastName}, {test}
                </Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search patient"
                onChangeText={(text) => onChangeSearch(text)}
                value={searchQuery}
                autoComplete
            />

            {filteredList && filteredList.length > 0 ? (
                <FlatList
                    style={styles.listOfProfiles}
                    data={filteredList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <View style={styles.textBox}>
                    <Text style={styles.textBoxText}> No accounts found</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    top: {
        alignItems: 'center',
        flex: 1,
        margin: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textBox: {
        // flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    textBoxText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    listOfProfiles: {
        width: '100%',
    },
    patientButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 15,
        backgroundColor: '#cecece',
    },
});
