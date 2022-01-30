import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { Button, Card, Paragraph, Title } from 'react-native-paper';
import { format } from 'date-fns';

const PatientScreen = ({ route, navigation }: any) => {
    const { item } = route.params;
    const randomHeight = Math.floor(Math.random() * (195 - 145 + 1)) + 145;
    const randomWeight = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const randomBMI = randomWeight / (randomHeight / 100) ** 2;
    return (
        <View style={styles.container}>
            <Image
                style={styles.picture}
                source={{
                    uri: 'https://www.thispersondoesnotexist.com/image',
                }}
            />
            <Card style={styles.card}>
                <Card.Content>
                    <Paragraph>First Name: {item.firstName}</Paragraph>
                    <Paragraph>Last Name: {item.lastName}</Paragraph>
                    <Paragraph>
                        Birthday:{' '}
                        {format(new Date(item.birthdate), 'MM/dd/yyyy')}
                    </Paragraph>
                    <Paragraph>Sex at birth: {item.sexAtBirth}</Paragraph>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.imc}>
                        <Paragraph>{randomHeight} cm</Paragraph>
                        <Paragraph>{randomWeight} kg</Paragraph>
                        <Paragraph>IMC: {randomBMI.toPrecision(3)}</Paragraph>
                    </View>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content>
                    <Paragraph>23 questionnaires filled</Paragraph>
                </Card.Content>
            </Card>
            <Button
                style={styles.questionnaire}
                icon="pencil"
                mode="outlined"
                compact
                onPress={() => navigation.navigate('Questionnaire')}
            >
                New questionnaire
            </Button>
        </View>
    );
};

export default PatientScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    picture: {
        borderRadius: 100,
        height: 150,
        width: 150,
    },
    card: {
        marginTop: 30,
        width: 300,
    },
    imc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    questionnaire: {
        marginTop: 30,
    },
});
