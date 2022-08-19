import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flex: 1
        }}>
            <Text style={{
                color: '#fff',
                width: "100%",
            }}>
            </Text>
        </View>
    )
}

export default Header