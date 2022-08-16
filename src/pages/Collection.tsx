import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { LRText, Value } from 'src/components/common'
import { CollectionItem, CollectionItemSkeleton } from 'src/components/collection'
import { useGetCollectionTokens, NFTTokensInterface } from 'src/hooks'

const Collection = () => {

  const { data: tokens, isLoading, fetchNextPage } = useGetCollectionTokens("0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949")

  const Banner = () => (
    <Image source={
      {
        uri: "https://looksrare.mo.cloudinary.net/0x4E1f41613c9084FdB9E34E11fAE9412427480e56/0xaec2fd4f711f9fabb8f3651007fe0c7bfee0a731eb68c90693bc267305e4883e"
      }
    }
      className="w-full h-[96px] object-cover -mb-10"
    ></Image>
  )

  // 
  const CollectionImage = () => (
    <Image source={
      {
        uri: "https://looksrare.mo.cloudinary.net/0x4E1f41613c9084FdB9E34E11fAE9412427480e56/0x99214e0f91fa4f84c3a04259c366f992319d447e72fd5e30e9372dc4d213c42e"
      }
    }
      className="w-[92px] h-[92px] object-cover ml-4 border-[2px]"
      style={{
        borderRadius: 4,
        borderColor: '#121619',
        borderWidth: 2
      }}
    ></Image>
  )

  const Name = () => (
    <View className='flex-row items-center justify-start mt-4'>
      <LRText className="text-xl font-bold mr-1 -text--lr-colors-text-01 ml-4">Terraforms</LRText>
      <MaterialIcons name="verified" size={16} color="#4589FF" />
    </View>
  )

  const Address = () => (
    <View>
      <LRText className='-text--lr-colors-text-03 font-bold text-sm ml-4 mt-2'>0x4E1f...0e56</LRText>
    </View>
  )

  const Stats = () => (
    <View className='flex-row items-center justify-between w-64'>

      <View className='flex-col items-start justify-center'>
        <Text className='-text--lr-colors-text-01 font-bold text-xl'>9.9k</Text>
        <Text className='-text--lr-colors-text-03 font-bold text-xs'>Items</Text>
      </View>

      <View className='flex-col items-start justify-center'>
        <Text className='-text--lr-colors-text-01 font-bold text-xl'>2.1k</Text>
        <Text className='-text--lr-colors-text-03 font-bold text-xs'>Owners</Text>
      </View>

      <View className='flex-col items-start justify-center'>
        <Value
          weiValue="10000000000000"
          currency='ETH'
          position='left'
          format
          color='-text--lr-colors-text-01'
          fontSize='font-bold text-xl'
          iconW='10'
          iconH='20'
        />
        <Text className='-text--lr-colors-text-03 font-bold text-xs'>Total Vol</Text>
      </View>

      <View className='flex-col items-start justify-center'>
        <Value
          weiValue="10000000000000"
          currency='ETH'
          position='left'
          format
          color='-text--lr-colors-text-01'
          fontSize='font-bold text-xl'
          iconW='10'
          iconH='20'
        />
        <Text className='-text--lr-colors-text-03 font-bold text-xs'>Floor</Text>
      </View>
    </View>
  )

  const Description = () => (
    <LRText className='-text--lr-colors-text-02 text-sm'>
      The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.
    </LRText>
  )

  const CollectionOffer = () => (<></>)

  const Tabs = () => (<>
    <View className='flex-row items-center justify-between w-full h-10 mt-4 mb-4'>
      <View className='-border-y--lr-colors-border-02 border-y w-[50%] h-10 items-center justify-center'>
        <LRText className='-text--lr-colors-text-01 text-xs'>Items</LRText>
      </View>
      <View className='-border-y--lr-colors-border-02 border-y w-[50%] h-10 items-center justify-center'>
        <LRText className='-text--lr-colors-text-01 text-xs'>Activity</LRText>
      </View>
    </View>
  </>
  )

  const renderItem = ({ item, index }: { item: NFTTokensInterface, index: number }) => (
    <CollectionItem
      key={index}
      image={item.image.src}
      name={item.name}
    />
  )

  const keyExtractor = (item: NFTTokensInterface) => item.id

  const Items = () => (
    <FlatList
      numColumns={6}
      data={tokens?.pages.flat()}
      renderItem={renderItem}
      onEndReached={() => fetchNextPage()}
      initialNumToRender={26}
      onEndReachedThreshold={0.01}
      // maxToRenderPerBatch={26}
      keyExtractor={keyExtractor}
      // ListFooterComponent={
      //     <CollectionItemSkeleton />
      // }
    />
  )

  const LoadingItems = () => (
    <View className='flex-row flex-wrap justify-center'>
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
  )
  const Activites = () => (<></>)

  return (
    <View className='w-full h-full -bg--lr-colors-ui-bg'>

        <Banner />
        <View className='flex-row justify-between'>

          <View className='flex-col'>
            <CollectionImage />
            <Name />
            <Address />
          </View>

          <View className='mt-12 mr-4'>
            <Stats />
          </View>

        </View>

        <View className='ml-4 mt-4'>
          <Description />
        </View>

        <CollectionOffer />
        <Tabs />
        {isLoading ? <LoadingItems /> : <Items />}
        <Activites />
    </View>
  )
}

export default Collection