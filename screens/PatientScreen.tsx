import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { Button, Card, Paragraph, Title } from 'react-native-paper';

const PatientScreen = ({ navigation }: any) => {
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
                    <Paragraph>First Name: Dominic</Paragraph>
                    <Paragraph>Last Name: Hains</Paragraph>
                    <Paragraph>Birthday: {Date()}</Paragraph>
                    <Paragraph>Gender: Male</Paragraph>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.imc}>
                        <Paragraph>175 lbs</Paragraph>
                        <Paragraph>75 kg</Paragraph>
                        <Paragraph>IMC: 25.6</Paragraph>
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
