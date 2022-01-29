import { StyleSheet } from 'react-native';
import { useState, SetStateAction } from 'react';
import { Searchbar } from 'react-native-paper';

import { Text, View } from '../components/Themed';

export default function SearchScreen({ navigation }: any) {
    const [searchQuery, setSearchQuery] = useState('');
    const [listOfProfiles, setListOfProfiles] = useState([]);

    const onChangeSearch = (query: SetStateAction<string>) =>
        setSearchQuery(query);

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search patient"
                onChangeText={onChangeSearch}
                value={searchQuery}
                autoComplete
            />
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
});
