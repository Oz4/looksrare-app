import { Dimensions, FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NFTTokensInterface, useGetCollection, useGetCollectionTokens } from 'src/hooks'
import { Tabs, Landing, LandingSkeleton, CollectionItemSkeleton, CollectionItem } from 'src/components/collection'

const Collection = ({ route }: { route: { params: { address: string } } }) => {

  const { data: collection, isLoading: isLoadingCollection } = useGetCollection(route.params.address)
  const { data: tokensPages, isLoading, fetchNextPage } = useGetCollectionTokens(route.params.address)

  const [loadHeavyComponent, setLoadHeavyComponent] = useState(false)

  useEffect(() => {
    setLoadHeavyComponent(true)
  }, [])


  
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

  return (
    <View className='w-[full] h-full -bg--lr-colors-ui-bg'>
      {
        (isLoadingCollection || !loadHeavyComponent) ?
          <LandingSkeleton />
          :
          <>
            
            {/* <Tabs /> */}
            <FlatList
              ListHeaderComponent={<Landing collection={collection} address={route.params.address} />}
              ListHeaderComponentStyle={{
                width: "100%"
              }}
              numColumns={Math.floor(width / 180)}
              data={tokens}
              renderItem={renderItem}
              onEndReached={() => fetchNextPage()}
              initialNumToRender={26}
              onEndReachedThreshold={0.01}
              maxToRenderPerBatch={26}
              keyExtractor={keyExtractor}
              contentContainerStyle={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 16
              }}
              ListFooterComponent={() => <CollectionItemSkeleton />}
            />
          </>
      }
    </View>
  )
}

export default Collection