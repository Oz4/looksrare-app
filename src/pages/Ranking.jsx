import { View, ScrollView, Text, FlatList } from 'react-native'
import React from 'react'
import { Header, LRButton } from 'src/components/common'
import { useGetCollections } from 'src/hooks/useGetCollections'
import { CollectionListItem } from 'src/components/ranking'

const Ranking = () => {

    const { data: collections, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetCollections()

    return (
        <View className="-bg--lr-colors-ui-bg p-4 h-full w-full">

            <Text className="-text--lr-colors-text-01 text-5xl">Collections</Text>
            <Text className="-text--lr-colors-text-01 text-base">The top NFT collections on LooksRare, ranked by floor price, volume and other statistics.</Text>

            <View className="flex-row justify-center align-middle">
                <LRButton primary title="All" borderRadius={0} backgroundColor="#00000000" borderColor='#343A3F' height={40} width={180} padding={4} />
                <LRButton primary title="Verified" borderRadius={0} backgroundColor="#343A3F" borderColor='#343A3F' color='#2DE370' height={40} width={180} padding={4} />
            </View>
            <FlatList
                data={collections.pages.flat()}

                renderItem={({ item, index }) => <CollectionListItem
                    key={item.address}
                    address={item.address}
                    src={item.logo?.src}
                    name={item.name}
                    verified={item.isVerified}
                    floor={item.floor.floorPrice}
                    dailyVol={item.volume.volume24h}
                    totalVol={item.volume.volumeAll}
                    owners={item.countOwners}
                    items={item.totalSupply}
                    floorChange={item.floor.floorChange24h}
                    dailyVolChange={item.volume.change24h}
                    index={index + 1} />
                }

                onEndReached={() => fetchNextPage()}
                onEndReachedThreshold={0.01}
            />

        </View>
    )
}

export default Ranking