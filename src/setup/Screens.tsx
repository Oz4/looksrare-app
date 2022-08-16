import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header as RankingHeader } from 'src/components/ranking';
import { HomeHeader } from 'src/components/home';
import { Home, Ranking, Collection } from 'src/pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Header as CollectionHeader } from 'src/components/collection';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Screens = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{
                    headerTitle: (props) => <HomeHeader />,
                    headerStyle: {
                        backgroundColor: '#121619',
                    },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white'
                }} />


                <Stack.Screen name="Stats" component={Ranking} options={{
                    headerTitle: (props) => <RankingHeader />,
                    headerStyle: {
                        backgroundColor: '#121619'

                    },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white'
                }} />

                <Stack.Screen name="Collection" component={Collection} options={{
                    headerTitle: (props) => <CollectionHeader />,
                    headerStyle: {
                        backgroundColor: '#121619'
                    },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white'
                }} />
            </Stack.Navigator>

            {/* <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} options={{
                    headerTitle: (props) => <HomeHeader />,
                    headerStyle: {
                        backgroundColor: '#121619',
                        borderColor: '#ffffff',
                        borderWidth: 1
                    },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white'
                }} />
                <Tab.Screen name="Stats" component={Ranking} options={{
                    headerTitle: (props) => <RankingHeader />,
                    headerStyle: {
                        backgroundColor: '#121619'

                    },
                    headerTitleStyle: { color: 'white' },
                    headerTintColor: 'white'
                }} />
            </Tab.Navigator> */}
        </NavigationContainer>
    )
}

export default Screens