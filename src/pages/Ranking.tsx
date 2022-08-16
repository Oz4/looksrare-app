import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGetCollections, Collection } from 'src/hooks'
import { ListItem, ListItemSkeleton, Filter } from 'src/components/ranking'

const Ranking = () => {

    const [isVerified, setIsVerified] = useState(true)
    const [sort, setSort] = useState<"HIGHEST_24H" | "CHANGE_24H_DESC" | "HIGHEST_TOTAL">("HIGHEST_24H")
    const { data: collections, fetchNextPage, isLoading, isFetchingNextPage, isFetching, hasNextPage } = useGetCollections(isVerified, sort)
    const isFilterChanged = isFetching && !isFetchingNextPage
    const [loadHeavyComponent, setLoadHeavyComponent] = useState(false)


    useEffect(() => {
        setLoadHeavyComponent(true)
    }, [])

    const keyExtractor = (item: Collection) => item.address


    const getItemLayout = (data: any, index: number) => {
        return {
            length: 108.7,
            offset: 108.7 * index,
            index
        }
    }

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
        <View className="-bg--lr-colors-ui-bg px-4 h-full w-full flex-1">

            {!loadHeavyComponent &&
                <View>
                    <Text className="-text--lr-colors-text-01 text-5xl mb-4 pt-4">Collections</Text>
                    <Text className="-text--lr-colors-text-01 text-base mb-4">The top NFT collections on LooksRare, ranked by floor price, volume and other statistics.</Text>
                    <View className="flex-row justify-end items-center w-full">
                        <Filter setIsVerified={setIsVerified} setSort={setSort} isVerified={isVerified} />
                    </View>
                </View>
            }

            {
                loadHeavyComponent &&

                <FlatList
                    data={collections?.pages?.flat()}
                    renderItem={renderItem}
                    onEndReached={() => fetchNextPage()}
                    initialNumToRender={20}
                    getItemLayout={getItemLayout}
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

                        hasNextPage ?

                            <View>
                                <ListItemSkeleton />
                                <ListItemSkeleton />
                            </View>
                            :
                            <View className='flex justify-center items-center h-[108.72px]'>
                                <Text className='-text--lr-colors-interactive-01'>
                                    No more collections !</Text>
                            </View>

                    }
                    ListHeaderComponent={
                        <>
                            <Text className="-text--lr-colors-text-01 text-5xl mb-4 pt-4">Collections</Text>
                            <Text className="-text--lr-colors-text-01 text-base mb-4">The top NFT collections on LooksRare, ranked by floor price, volume and other statistics.</Text>
                            <View className="flex-row justify-end items-center w-full">
                                <Filter setIsVerified={setIsVerified} setSort={setSort} isVerified={isVerified} />
                            </View>
                        </>
                    }
                />
            }
        </View >
    )
}

export default Ranking


/* 

    let { width } = Dimensions.get("window");

    const dataProviderMaker = (data: any) =>
        new DataProvider((r1, r2) => r1.address !== r2.address).cloneWithRows(data);


    const rowRenderer = (type: any, data: any, index: any) => {

        if (index === 0)
            return <View onLayout={e => console.log(e.nativeEvent.layout)}>
                <Text className="-text--lr-colors-text-01 text-5xl mb-4 pt-4">Collections</Text>
                <Text className="-text--lr-colors-text-01 text-base mb-4">The top NFT collections on LooksRare, ranked by floor price, volume and other statistics.</Text>
                <View className="flex-row justify-end items-center w-full">
                    <Filter setIsVerified={setIsVerified} setSort={setSort} isVerified={isVerified} />
                </View>
            </View>
        return renderItem({
            item: data,
            index,
        })
    };

    const layoutMaker = () =>
        new LayoutProvider(
            (index) => {
                if (index === 0) return 1
                return 0
            },
            (type, dim) => {
                if (type === 1)
                    dim.height = 185.09;
                else
                    dim.height = 108.7;

                dim.width = width;
            }
        );


    const dataProvider = dataProviderMaker(collections?.pages.flat() || [])

    const layoutProvider = layoutMaker()

                <RecyclerListView

                    layoutProvider={layoutProvider}
                    dataProvider={dataProvider}
                    rowRenderer={rowRenderer}

                    onEndReached={() => fetchNextPage()}
                    onEndReachedThreshold={1}
                    renderFooter={() =>
                        <View>
                            <ListItemSkeleton />
                            <ListItemSkeleton />
                        </View>
                    }
                />
*/