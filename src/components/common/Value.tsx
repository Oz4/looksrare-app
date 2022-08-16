import React from 'react'
import { View, Text } from 'react-native'
import { convertWeiToEther, getNumberWithThreeDigitsComma } from 'src/utils'
//@ts-ignore
import ETHLogo from 'src/assets/ETH.ts'
import { SvgXml } from 'react-native-svg';
import LRText from "./LRText";

interface Props {
    weiValue: string
    currency: string
    position: 'left' | 'right',
    format: boolean,
    color?: string,
    fontSize?: string,
    iconW?: string,
    iconH?: string
}

const Value = ({
    weiValue,
    currency,
    position,
    format,
    color = "-text--lr-colors-text-03",
    fontSize = "text-xs",
    iconW = "8",
    iconH = "16",
}: Props) => {

    const textClassName = color + ' ' + fontSize
    const CurrencyIcon = () => {
        if (currency === "ETH") return (
            <View className={position === "right" ? "ml-1" : "mr-1 text"}>
                <SvgXml xml={ETHLogo} width={iconW} height={iconH} />
            </View>
        )
        return <></>
    }

    return (
        <View className='flex-row items-center'>
            {position === 'left' && <CurrencyIcon />}
            <LRText className={textClassName}>
                {format ? getNumberWithThreeDigitsComma(convertWeiToEther(weiValue)) : convertWeiToEther(weiValue)}
            </LRText>
            {position === 'right' && <CurrencyIcon />}
        </View>
    )
}


export default Value