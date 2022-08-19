import { View } from 'react-native'
import React from 'react'
import { Banner, CollectionImage, Name, Address, Stats, Description } from '.'
import { collectionResponseInterface } from 'src/hooks'

const Landing = ({
    collection,
    address
}: {
    collection: collectionResponseInterface | undefined
    address: string
}) => {
    return (
        <View className='w-full'>
            <Banner uri={collection?.banner?.src || null} />

            <View className='flex-row justify-between'>

                <CollectionImage uri={collection?.logo?.src || null} />

                <View className='mt-12 mr-4'>
                    <Stats items={collection?.totalSupply || ""} owners={collection?.countOwners || ""} totalVol={collection?.volume.volumeAll || ""} floor={collection?.floor.floorPrice || ""} />
                </View>

            </View>
            <Name name={collection?.name || ""} verified={collection?.isVerified} />
            <Address address={address} />
            <View className='ml-4 mt-4'>
                <Description description={collection?.description || ""} />
            </View>
        </View>
    )
}

export default Landing