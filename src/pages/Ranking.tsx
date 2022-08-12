import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useGetCollections, Collection } from 'src/hooks'
import { ListItem, ListItemSkeleton, Filter } from 'src/components/ranking'

const Ranking = () => {

    const [isVerified, setIsVerified] = useState(true)
    const [sort, setSort] = useState<"HIGHEST_24H" | "CHANGE_24H_DESC" | "HIGHEST_TOTAL">("HIGHEST_24H")
    const { data: collections, fetchNextPage, isLoading, isFetchingNextPage, isFetching } = useGetCollections(isVerified, sort)
    const isFilterChanged = isFetching && !isFetchingNextPage
    const keyExtractor = (item: Collection) => item.address

    const renderItem = ({ item, index }: { item: Collection, index: number }) => (
        <View key={item.address}>
            {
                (isFilterChanged || isLoading) ?
                    <ListItemSkeleton />
                    :
                    <ListItem
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
            }
        </View>
    )

    return (
        <View className="-bg--lr-colors-ui-bg px-4 h-full w-full">
            <FlatList
                data={collections?.pages?.flat()}
                renderItem={renderItem}
                onEndReached={() => fetchNextPage()}
                initialNumToRender={20}
                onEndReachedThreshold={0.01}
                maxToRenderPerBatch={20}
                windowSize={21}
                keyExtractor={keyExtractor}
                ListEmptyComponent={
                    <>
                        <ListItemSkeleton />
                        <ListItemSkeleton />
                        <ListItemSkeleton />
                        <ListItemSkeleton />
                        <ListItemSkeleton />
                        <ListItemSkeleton />
                    </>
                }
                ListFooterComponent={
                    <View className='pb-4'>
                        <ListItemSkeleton />
                        <ListItemSkeleton />
                    </View>

                }
                ListHeaderComponent={
                    <>
                        <Text className="-text--lr-colors-text-01 text-5xl mb-4 pt-4">Collections</Text>
                        <Text className="-text--lr-colors-text-01 text-base mb-4">The top NFT collections on LooksRare, ranked by floor price, volume and other statistics.</Text>
                        <View className="flex-row justify-end items-center w-full">
                            <Filter setIsVerified={setIsVerified} setSort={setSort} isVerified={isVerified} sort={sort} />
                        </View>
                    </>
                }
            />
        </View>
    )
}

export default Ranking