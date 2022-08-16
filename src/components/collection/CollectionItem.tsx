import { View, Text, Image } from 'react-native'
import React from 'react'
import { Value, LRText } from 'src/components/common'
import { getCachedImage } from 'src/utils'

interface Props {
    image: string
    name: string
}

const CollectionItem = ({
    image,
    name
}: Props) => {
    return (
        <View className='w-[180px] h-[270px] m-2  rounded-lg -bg--lr-colors-ui-01'>
            <Image source={{
                uri: getCachedImage(image, 328)
            }}
                className="w-[164px] h-[164px] object-contain mt-2 ml-2 rounded-lg"
            />

            <LRText className='text-[10px] -text--lr-colors-text-02 mt-2 ml-2' weight='SemiBold'>{name}</LRText>


            <View className='ml-2 mt-2 flex-row justify-between items-center'>
                <Value
                    weiValue='15000000000000000000'
                    currency='ETH'
                    position='left'
                    format={false}
                    color='-text--lr-colors-text-01 font-bold'
                />

                <View className='border-[1px] rounded-full mr-2 -border--lr-colors-border-02'>
                    <LRText className='text-[10px] -text--lr-colors-text-02 mx-2' weight='SemiBold'>18,688</LRText>
                </View>
            </View>

            <View className='border-b m-2 -border--lr-colors-border-02' />

            <View className='flex-row justify-between items-center ml-2 mr-2'>
                <View className='flex-row items-center'>
                    <LRText className='text-[10px] -text--lr-colors-text-03 mr-1' weight='Medium'>Offer</LRText>
                    <Value
                        weiValue='15000000000000000000'
                        currency='ETH'
                        position='left'
                        format={false}
                        color='-text--lr-colors-text-01 font-bold'
                        fontSize='text-[10px]'
                    />
                </View>
                <LRText className='-text--lr-colors-text-01 pb-2' weight='ExtraBold'>...</LRText>
            </View>


        </View>
    )
}

export default CollectionItem