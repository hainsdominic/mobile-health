import { StyleSheet } from 'react-native';
import React, { useState, SetStateAction } from 'react';
import { Searchbar } from 'react-native-paper';

import { Text, View } from '../components/Themed';

import { patients } from '../PatientList';

export default function SearchScreen({ navigation }: any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [listOfProfiles, setListOfProfiles] = useState([]);

    const onChangeSearch = (query: SetStateAction<string>) =>
        setSearchQuery(query);
    console.log(patients);

    const ResultCard = (item: any) => {
        return <Text> {item}</Text>;
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Searchbar
                    placeholder="Search patient"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    autoComplete
                />
            </View>
            {listOfProfiles.length === 0 ? (
                <View>
                    {listOfProfiles.map((item, id) => {
                        <ResultCard key={id} item={item} />;
                    })}
                </View>
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
        // justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textBox: {
        flex: 1,
        alignItems: 'center',
    },
});
