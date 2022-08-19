import { Dimensions, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NFTTokensInterface, useGetCollectionTokens } from 'src/hooks'
import CollectionItem from './CollectionItem'
import { RouteProp, useRoute } from '@react-navigation/native'
import CollectionItemSkeleton from './CollectionItemSkeleton'

const Items = () => {


    const [loadHeavyComponent, setLoadHeavyComponent] = useState(false)

    const route = useRoute<any>()

    const { address } = route.params || ""

    const { data: tokensPages, isLoading, fetchNextPage } = useGetCollectionTokens(address)

    const { width } = Dimensions.get('window')

    const tokens = tokensPages?.pages.flat()

    // useEffect(() => {
    //     setLoadHeavyComponent(true)
    // }, [])

    const renderItem = ({ item, index }: { item: NFTTokensInterface, index: number }) => {

        return <CollectionItem
            key={index}
            image={item.image.src}
            name={item.name}
        />

    }


    const keyExtractor = (item: NFTTokensInterface) => item.id

    if (!loadHeavyComponent)
        return <View className='flex-row flex-wrap justify-center items-center py-4'>
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
            <CollectionItemSkeleton />
        </View>

    return (
        <FlatList
            onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
            numColumns={Math.floor(width / 180)}
            data={tokens}
            renderItem={renderItem}
            onEndReached={() => fetchNextPage()}
            initialNumToRender={26}
            onEndReachedThreshold={0.01}
            maxToRenderPerBatch={26}
            keyExtractor={keyExtractor}
            className="py-4"
            contentContainerStyle={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 16
            }}
            ListFooterComponent={() => <CollectionItemSkeleton />}
        />
    )
}

export default Items