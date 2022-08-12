import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header as RankingHeader } from 'src/components/ranking';
import { HomeHeader } from 'src/components/home';
import { Home, Ranking } from 'src/pages';

const Stack = createNativeStackNavigator();


const Screens = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{
                    headerTitle: (props) => <HomeHeader />,
                    headerStyle: {
                        backgroundColor: '#121619',
                    },
                    headerTitleStyle: {color:'white'},
                    headerTintColor: 'white'
                }} />


                <Stack.Screen name="Stats" component={Ranking} options={{
                    headerTitle: (props) => <RankingHeader />,
                    headerStyle: {
                        backgroundColor: '#121619'
                        
                    },
                    headerTitleStyle: {color:'white'},
                    headerTintColor: 'white'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Screens