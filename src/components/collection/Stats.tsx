import { View } from "react-native";
import { LRText, Value } from "src/components/common";

const Stats = ({
    items,
    owners,
    totalVol,
    floor,
}: {
    items: string
    owners: string
    totalVol: string
    floor: string
}) => {

    return (
        <View className='flex-row items-center justify-between w-64'>

            <View className='flex-col items-start justify-center'>
                <LRText className='-text--lr-colors-text-01 font-bold text-xl'>9.9k</LRText>
                <LRText className='-text--lr-colors-text-03 font-bold text-xs'>Items</LRText>
            </View>

            <View className='flex-col items-start justify-center'>
                <LRText className='-text--lr-colors-text-01 font-bold text-xl'>2.1k</LRText>
                <LRText className='-text--lr-colors-text-03 font-bold text-xs'>Owners</LRText>
            </View>

            <View className='flex-col items-start justify-center'>
                <Value
                    weiValue="10000000000000"
                    currency='ETH'
                    position='left'
                    format
                    color='-text--lr-colors-text-01'
                    fontSize='font-bold text-xl'
                    iconW='10'
                    iconH='20'
                />
                <LRText className='-text--lr-colors-text-03 font-bold text-xs'>Total Vol</LRText>
            </View>

            <View className='flex-col items-start justify-center'>
                <Value
                    weiValue="10000000000000"
                    currency='ETH'
                    position='left'
                    format
                    color='-text--lr-colors-text-01'
                    fontSize='font-bold text-xl'
                    iconW='10'
                    iconH='20'
                />
                <LRText className='-text--lr-colors-text-03 font-bold text-xs'>Floor</LRText>
            </View>
        </View>
    )
}

export default Stats;