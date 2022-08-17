import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { LRText } from 'src/components/common'
import { Feather } from '@expo/vector-icons';

const NavigationBar = () => {

    const navigation = useNavigation()
    const [selectedScreen, setSelectedScreen] = useState(0)

    const navigateTo = (screen: string, index: number) => {
        // @ts-ignore 
        navigation.navigate(screen)
        setSelectedScreen(index)
    }

    const selectedColor = "#2DE370"
    const defaultColor = "#fff"

    const getColor = (index: number) => {
        return selectedScreen === index ? selectedColor : defaultColor
    }

    const getTextClassName = (index: number) => {
        return selectedScreen === index ? "-text--lr-colors-interactive-01 text-xs mt-1" : "-text--lr-colors-text-03 text-xs mt-1"
    }

    const ScreenTab = ({
        screen,
        index,
        title,
        featherIconName,
    }: {
        screen: string,
        index: number,
        title: string,
        featherIconName: any,
    }) => {
        return (
            <TouchableOpacity onPress={() => navigateTo(screen, index)}>
                <View className='flex-col justify-center items-center'>
                    <Feather name={featherIconName} size={18} color={getColor(index)} />
                    <LRText className={getTextClassName(index)} weight='SemiBold'>{title}</LRText>
                </View>
            </TouchableOpacity >
        )
    }

    return (
        <View className='w-full -bg--lr-colors-ui-bg justify-center items-center border-t -border--lr-colors-border-02'>
            <View className='w-[100%] -bg--lr-colors-ui-bg flex-row justify-between items-center p-3'>

                <ScreenTab screen='Home' index={0} title='Home' featherIconName='home' />

                <ScreenTab screen='Stats' index={1} title='Stats' featherIconName='bar-chart-2' />

                <ScreenTab screen='Stats' index={2} title='Search' featherIconName='search' />

                <ScreenTab screen='Stats' index={3} title='Explore' featherIconName='compass' />

                <ScreenTab screen='Stats' index={4} title='Profile' featherIconName='user' />

            </View>

        </View>
    )
}

export default NavigationBar