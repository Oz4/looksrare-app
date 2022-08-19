import { View } from "react-native";
import { LRText, Value } from "src/components/common";
import { convertWeiToEther, abbreviateNumber } from "src/utils";
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
                <LRText className='-text--lr-colors-text-01 font-bold text-base'>{abbreviateNumber(items, 1)}</LRText>
                <LRText className='-text--lr-colors-text-03 font-bold text-xs'>Items</LRText>
            </View>

            <View className='flex-col items-start justify-center'>
                <LRText className='-text--lr-colors-text-01 font-bold text-base'>{abbreviateNumber(owners, 1)}</LRText>
                <LRText className='-text--lr-colors-text-03 font-bold text-xs'>Owners</LRText>
            </View>

            <View className='flex-col items-start justify-center'>
                <Value
                    weiValue={totalVol}
                    currency='ETH'
                    position='left'
                    color='-text--lr-colors-text-01'
                    fontSize='font-bold text-base'
                    iconW='10'
                    iconH='16'
                    abbreviate={true}
                    abbreviateDecimal={1}
                    round={true}
                />
                <LRText className='-text--lr-colors-text-03 font-bold text-xs'>Total Vol</LRText>
            </View>

            <View className='flex-col items-start justify-center'>
                <Value
                    weiValue={floor}
                    currency='ETH'
                    position='left'
                    color='-text--lr-colors-text-01'
                    fontSize='font-bold text-base'
                    iconW='10'
                    iconH='16'
                    abbreviate={false}
                    maxDigits={3}
                />
                <LRText className='-text--lr-colors-text-03 font-bold text-xs'>Floor</LRText>
            </View>
        </View>
    )
}

export default Stats;