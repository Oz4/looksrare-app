import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
//@ts-ignore
import { convertWeiToEther } from 'src/utils'
import { LRButton, Value } from 'src/components/common'
import { MaterialIcons } from '@expo/vector-icons';

interface Props {
    address: string | null
    src: string | null
    name: string | null
    verified: boolean | null
    floor: string | null
    dailyVol: string | null
    totalVol: string | null
    owners: string | null
    items: string | null
    floorChange: number | null
    dailyVolChange: number | null
    index: number | null
}

const ListItem = ({
    address,
    src,
    name,
    verified,
    floor,
    dailyVol,
    totalVol,
    owners,
    items,
    floorChange,
    dailyVolChange,
    index,
}: Props) => {

    const [show, setShow] = useState(false)

    const CollectionIndex = () => (
        <Text className="-text--lr-colors-text-01 mr-2 w-8 flex-shrink-0 text-center" >{index}</Text>
    )

    const CollectionImage = () => (
        src ? <Image source={{ uri: src }} className="w-10 h-10" />
            : <View className="w-10 h-10" />
    )

    const CollectionName = () => (
        <View className='flex-row items-center justify-center'>
            <Text className="-text--lr-colors-text-01 mr-1">
                {name}
            </Text>
            {verified && <MaterialIcons name="verified" size={16} color="#4589FF" />}
        </View>
    )

    const CollectionDailyVolume = () => (
        <View className="flex-col items-end justify-center">
            <Value weiValue={dailyVol || "0"} currency="ETH" position='left' format/>

            {dailyVolChange === 0 && <Text className="-text--lr-colors-text-03 text-[10px]">{dailyVolChange.toFixed(2)}%</Text>}
            {(dailyVolChange && dailyVolChange > 0) ? <Text className="-text--lr-colors-link-01 text-[10px]">+{dailyVolChange.toFixed(2)}%</Text> : null}
            {(dailyVolChange && dailyVolChange < 0) ? <Text className="-text--lr-colors-text-error text-[10px]">{dailyVolChange.toFixed(2)}%</Text> : null}
            {!dailyVolChange && <Text className="-text--lr-colors-text-03 text-[10px]"></Text>}
        </View>
    )

    const ShowExtraDetailsButton = () => (
        <LRButton title={show ? "- Less" : "+ More"} onPress={() => setShow(prev => !prev)} backgroundColor="#00000000" borderColor='#00000000' width={100} height={25} padding={0} color="#878D96" fontSize={12} ml={-30} />
    )

    const TotalVolume = () => (
        <View className='flex-row w-36'>
            <Text className="-text--lr-colors-text-03 text-xs w-20" >
                Total Vol
            </Text>
            <Value weiValue={totalVol || "0"} currency="ETH" position='left' format />
        </View>
    )

    const Floor = () => (
        <View className='flex-row'>
            <Text className="-text--lr-colors-text-03 text-xs w-20" >
                Floor
            </Text>
            <Text className="-text--lr-colors-text-03 text-xs mr-2" >
                <Value weiValue={floor || "0"} currency="ETH" position='left' format />
            </Text>

            {floorChange === 0 && <Text className="-text--lr-colors-text-03 text-xxs mt-px">({floorChange}%)</Text>}
            {(floorChange && floorChange > 0) ? <Text className="-text--lr-colors-link-01 text-xxs mt-px">(+{floorChange.toFixed(2)}%)</Text> : null}
            {(floorChange && floorChange < 0) ? <Text className="-text--lr-colors-text-error text-xxs mt-px">({floorChange.toFixed(2)}%)</Text> : null}
        </View>
    )

    const Owners = () => (
        <View className='flex-row w-36'>
            <Text className="-text--lr-colors-text-03 text-xs w-20" >
                Owners
            </Text>
            <Text className="-text--lr-colors-text-03 text-xs" >
                {owners}
            </Text>
        </View>
    )

    const Items = () => (
        <View className='flex-row w-36'>
            <Text className="-text--lr-colors-text-03 text-xs w-20" >
                Items
            </Text>
            <Text className="-text--lr-colors-text-03 text-xs" >
                {items}
            </Text>
        </View>
    )

    const HiddenExtraDetails = () => (
        show ?
            <View className="flex-col ml-20 pl-3">
                <Floor />
                <TotalVolume />
                <Owners />
                <Items />
            </View>
            :
            <></>
    )

    return (
        <View className="flex-col py-8 border-b -border-b--lr-colors-border-01">

            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <CollectionIndex />
                    <CollectionImage />
                    <View className="flex-col ml-2 justify-start">
                        <CollectionName />
                        <ShowExtraDetailsButton />
                    </View>
                </View>
                <CollectionDailyVolume />
            </View>

            <HiddenExtraDetails />

        </View >
    )
}

export default React.memo(ListItem)