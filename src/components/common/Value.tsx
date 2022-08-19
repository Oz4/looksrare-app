import React from 'react'
import { View, Text } from 'react-native'
import { abbreviateNumber, convertWeiToEther, getNumberWithThreeDigitsComma } from 'src/utils'
// @ts-ignore
import ETHLogo from 'src/assets/ETH.ts'
import { SvgXml } from 'react-native-svg';
import LRText from "./LRText";

interface Props {
    weiValue: string
    currency: string
    position: 'left' | 'right',
    format?: boolean,
    color?: string,
    fontSize?: string,
    iconW?: string,
    iconH?: string,
    abbreviate?: boolean,
    abbreviateDecimal?: number,
    round?: boolean,
    maxDigits?: number | undefined,
}

const Value = ({
    weiValue,
    currency,
    position,
    format = false,
    color = "-text--lr-colors-text-03",
    fontSize = "text-xs",
    iconW = "8",
    iconH = "16",
    abbreviate = false,
    abbreviateDecimal = 1,
    round = false,
    maxDigits = undefined,

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

    let value = convertWeiToEther(weiValue)

    if (format)
        value = getNumberWithThreeDigitsComma(value) as string

    if (round)
        value = Math.round(parseFloat(value)).toString()

    if (abbreviate)
        value = abbreviateNumber(value, abbreviateDecimal)

    if (maxDigits)
        value = parseFloat(value).toFixed(maxDigits)

    return (
        <View className='flex-row items-center'>
            {position === 'left' && <CurrencyIcon />}
            <LRText className={textClassName}>
                {value}
            </LRText>
            {position === 'right' && <CurrencyIcon />}
        </View>
    )
}


export default Value