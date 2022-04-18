/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import EditProfessionalModal from '../screens/EditProfessionalModal';
import NewPatientScreen from '../screens/NewPatientScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import PatientScreen from '../screens/PatientScreen';
import ProfileScreen from '../screens/ProfileScreen';
// import BPIScreen from '../screens/BPIScreen';
import GSCIScreen from '../screens/GSCIScreen';
import SearchScreen from '../screens/SearchScreen';
import { RootStackParamList, RootTabParamList } from '../types';

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
            <Stack.Screen name="Patient" component={PatientScreen} />
            <Stack.Screen name="Questionnaire" component={GSCIScreen} />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                    name="EditProfessionalModal"
                    component={EditProfessionalModal}
                    options={{ title: 'Edit' }}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Search"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            {/* Add */}
            <BottomTab.Screen
                name="New"
                component={NewPatientScreen}
                options={{
                    title: 'New Patient',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="plus-circle" color={color} />
                    ),
                }}
            />
            {/* Search */}
            <BottomTab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="search" color={color} />
                    ),
                }}
            />
            {/* Profile */}
            <BottomTab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user-md" color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}
