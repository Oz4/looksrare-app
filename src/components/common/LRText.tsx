import { Text } from 'react-native'
import React from 'react'

interface Props {
    style?: {},
    children: React.ReactNode,
    weight?: "Thin" | "ExtraLight" | "Light" | "Medium" | "SemiBold" | "Bold" | "ExtraBold" | "Black",
    className?: string,
}
const LRText = ({ style = {}, children, weight, className = "" }: Props) => {


    return (
        <Text
            style={[{
                fontFamily:
                weight === "Thin" ? 'Inter_100Thin'
                : weight === "ExtraLight" ? 'Inter_200ExtraLight'
                : weight === "Light" ? 'Inter_300Light'
                : weight === "Medium" ? 'Inter_500Medium'
                : weight === "SemiBold" ? 'Inter_600SemiBold'
                : weight === "Bold" ? 'Inter_700Bold'
                : weight === "ExtraBold" ? 'Inter_800ExtraBold'
                : weight === "Black" ? 'Inter_900Black'
                : 'Inter_400Regular'

            }, style]}
            className={className}
        >{children}</Text>
    )
}

export default LRText