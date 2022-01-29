import {
    StatusBar,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import React, { useState, SetStateAction, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

import { format } from 'date-fns';

import { Text, View } from '../components/Themed';

import patients from '../Patients.json';

export default function SearchScreen({ navigation }: any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [listOfProfiles, setListOfProfiles] = useState<any>();
    const [filteredList, setFilteredList] = useState<any>();

    const onChangeSearch = (query: string) => {
        setSearchQuery(query);

        let tempList = listOfProfiles.filter((profile: any) => {
            let tempName = profile.Name.toLowerCase();
            if (tempName.includes(query.toLocaleLowerCase(), 0)) {
                return profile;
            }
        });
        setFilteredList(tempList);
        if (query.length === 0) {
            setFilteredList([]);
        }
    };

    useEffect(() => {
        setListOfProfiles(patients);
    }, []);

    const renderItem = ({ item }: any) => {
        let newDate: [] = item.Birth.split('T')[0].split('-');
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
            <TouchableOpacity style={styles.patientButton}>
                <Text>
                    {item.Name}, {test}
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
                    keyExtractor={(item) => item.Birth}
                />
            ) : (
                <View style={styles.textBox}>
                    <Text> No accounts found</Text>
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
        margin: 10,
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
