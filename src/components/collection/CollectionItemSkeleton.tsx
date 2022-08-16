import { View } from 'react-native'
import React from 'react'
import { Skeleton } from 'native-base';

const CollectionItemSkeleton = () => {
    return (
        <View className='w-[180px] h-[270px] m-2  rounded-lg -bg--lr-colors-ui-01'>

            <Skeleton h={164} w={164} marginBottom={0} marginTop={2} marginLeft={2} startColor="#121619" endColor={"#343A3F"} className="rounded-lg" />
            <Skeleton h={3} w={32} marginBottom={0} marginTop={2} marginLeft={2} startColor="#121619" endColor={"#343A3F"} className="rounded-lg" />

            <View className='ml-2 mt-2 mr-2 flex-row justify-between items-center'>
                <Skeleton h={3} w={16} startColor="#121619" endColor={"#343A3F"} className="rounded-lg" />
                <Skeleton h={3} w={8} startColor="#121619" endColor={"#343A3F"} className="rounded-lg" />
            </View>

            <View className='border-b m-2 -border--lr-colors-border-02' />

            <View className='flex-row justify-between items-center ml-2 mr-2 mt-2'>
                <View className='flex-row items-center'>
                    <Skeleton h={3} w={16} startColor="#121619" endColor={"#343A3F"} className="rounded-lg" />
                </View>
                <Skeleton h={3} w={8} startColor="#121619" endColor={"#343A3F"} className="rounded-lg" />
            </View>
        </View>
    )
}

export default CollectionItemSkeleton