import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useGetCollections, Collection } from 'src/hooks'
import { CollectionListItem, CollectionListItemSkeleton, ActionSheetFilter } from 'src/components/ranking'

const Ranking = () => {

    const [isVerified, setIsVerified] = useState(true)
    const [sort, setSort] = useState<"HIGHEST_24H" | "CHANGE_24H_DESC" | "HIGHEST_TOTAL">("HIGHEST_24H")

    const { data: collections, fetchNextPage, isLoading, isFetching } = useGetCollections(isVerified, sort)

    const LoadingComponent = () => (
        <View className="-bg--lr-colors-ui-bg p-4 h-full w-full">
            <Text className="-text--lr-colors-text-01 text-5xl mb-4">Collections</Text>
            <Text className="-text--lr-colors-text-01 text-base mb-4">The top NFT collections on LooksRare, ranked by floor price, volume and other statistics.</Text>
            <View className="flex-row justify-end items-center w-full">
                <ActionSheetFilter setIsVerified={setIsVerified} setSort={setSort} isVerified={isVerified} sort={sort} />
            </View>

            <CollectionListItemSkeleton />
            <CollectionListItemSkeleton />
            <CollectionListItemSkeleton />
            <CollectionListItemSkeleton />
            <CollectionListItemSkeleton />
            <CollectionListItemSkeleton />

        </View >
    )

    if (isLoading || isFetching) return <LoadingComponent />

    return (
        <View className="-bg--lr-colors-ui-bg p-4 h-full w-full">

            <FlatList
                data={collections?.pages?.flat()}
                renderItem={renderItem}
                onEndReached={() => fetchNextPage()}
                initialNumToRender={20}
                onEndReachedThreshold={0.01}
                maxToRenderPerBatch={20}
                windowSize={20}
                keyExtractor={keyExtractor}
                ListEmptyComponent={
                    <>
                        <CollectionListItemSkeleton />
                        <CollectionListItemSkeleton />
                        <CollectionListItemSkeleton />
                        <CollectionListItemSkeleton />
                        <CollectionListItemSkeleton />
                        <CollectionListItemSkeleton />
                    </>
                }
                ListFooterComponent={
                    <>
                        <CollectionListItemSkeleton />
                        <CollectionListItemSkeleton />
                    </>

                }
                ListHeaderComponent={
                    <>
                        <Text className="-text--lr-colors-text-01 text-5xl mb-4">Collections</Text>
                        <Text className="-text--lr-colors-text-01 text-base mb-4">The top NFT collections on LooksRare, ranked by floor price, volume and other statistics.</Text>
                        <View className="flex-row justify-end items-center w-full">
                            <ActionSheetFilter setIsVerified={setIsVerified} setSort={setSort} isVerified={isVerified} sort={sort} />
                        </View>
                    </>
                }
            />
        </View>
    )
}

const renderItem = ({ item, index }: { item: Collection, index: number }) => (
    <View key={item.address}>
        <CollectionListItem
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
            index={index + 1}
        />
    </View>)



const keyExtractor = (item: Collection) => item.address

export default Ranking