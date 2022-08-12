import React from 'react'
import { View, Text } from 'react-native'
import { convertWeiToEther, getNumberWithThreeDigitsComma } from 'src/utils'
//@ts-ignore
import ETHLogo from 'src/assets/ETH.ts'
import { SvgXml } from 'react-native-svg';
interface Props {
    weiValue: string
    currency: string
    position: 'left' | 'right',
    format: boolean,
    color?: string,
    fontSize?: string,
}

const Value = ({
    weiValue,
    currency,
    position,
    format,
    color = "-text--lr-colors-text-03",
    fontSize = "text-xs"
}: Props) => {

    const textClassName = color + ' ' + fontSize
    const CurrencyIcon = () => {
        if (currency === "ETH") return (
            <View className={position === "right" ? "ml-1" : "mr-1 text"}>
                <SvgXml xml={ETHLogo} width='8' height='16' />
            </View>
        )
        return <></>
    }

    return (
        <View className='flex-row '>
            {position === 'left' && <CurrencyIcon />}
            <Text className={textClassName}>
                {format ? getNumberWithThreeDigitsComma(convertWeiToEther(weiValue)) : convertWeiToEther(weiValue)}
            </Text>
            {position === 'right' && <CurrencyIcon />}
        </View>
    )
}


export default Value