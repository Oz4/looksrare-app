import { View, Text } from 'react-native'
import React from 'react'
import { Skeleton } from 'native-base';

const LandingSkeleton = () => {
  return (
    <View className='w-full'>
      <Skeleton h={"96px"} w={"100%"} startColor="#121619" endColor={"#343A3F"} className="-mb-10"/>

      <View className='flex-row justify-between'>

        <Skeleton h={"92px"} w={"92px"} startColor="#121619" endColor={"#343A3F"} className="ml-4 border-2 -border-[#121619] rounded" />

        <View className='mt-12 mr-4'>

          <View className='flex-row items-center justify-between w-64 -mt-9'>
            <View className='flex-col items-start justify-center'>
              <Skeleton h={"20px"} w={"40px"} startColor="#121619" endColor={"#343A3F"} className="rounded"/>
            </View>

            <View className='flex-col items-start justify-center'>
              <Skeleton h={"20px"} w={"40px"} startColor="#121619" endColor={"#343A3F"} className="rounded"/>
            </View>

            <View className='flex-col items-start justify-center'>
              <Skeleton h={"20px"} w={"40px"} startColor="#121619" endColor={"#343A3F"} className="rounded"/>
            </View>

            <View className='flex-col items-start justify-center'>
              <Skeleton h={"20px"} w={"40px"} startColor="#121619" endColor={"#343A3F"} className="rounded"/>
            </View>
          </View>
        </View>

      </View>

      <Skeleton h={"20px"} w={"150px"} startColor="#121619" endColor={"#343A3F"} className="ml-4 mt-4 rounded" />

      <Skeleton h={"15px"} w={"120px"} startColor="#121619" endColor={"#343A3F"} className="ml-4 mt-4 rounded" />

      <View className='ml-4 mt-4'>
        <Skeleton h={"10px"} w={"300px"} startColor="#121619" endColor={"#343A3F"} className="rounded" />
        <Skeleton h={"10px"} w={"300px"} startColor="#121619" endColor={"#343A3F"} className="mt-2 rounded" />
        <Skeleton h={"10px"} w={"300px"} startColor="#121619" endColor={"#343A3F"} className="mt-2 rounded" />
        <Skeleton h={"10px"} w={"250px"} startColor="#121619" endColor={"#343A3F"} className="mt-2 rounded" />
      </View>
    </View>
  )
}

export default LandingSkeleton