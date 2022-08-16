import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { LRButton } from 'src/components/common'
import { useGetTop5Collections } from 'src/hooks'
import { ListItem } from 'src/components/ranking'

const Home = ({ navigation }) => {

    const { data } = useGetTop5Collections()

    return (
        <View
            style={{
                backgroundColor: '#121619',
            }}
        >
            <ScrollView>
                <View style={{
                    padding: 16
                }}>
                    <Text className="-text--lr-colors-text-01 text-5xl text-left">Trade NFTs, Get Rewards</Text>
                </View>
                <View style={{
                    padding: 16
                }}>
                    <Text className="-text--lr-colors-text-02 text-base text-left">
                        Buy  NFTs (or sell 'em) to <Text className="-text--lr-colors-link-01">earn rewards.</Text>
                        Explore the market to get started.
                    </Text>
                </View>

                <View className='p-4 flex-row items-center justify-left'>
                    <LRButton
                        title="List an NFT"
                        mr={8}
                        color="#000000"
                        onPress={() => navigation.navigate('Collection')}
                    ></LRButton>

                    <LRButton
                        title="Explore NFTs"
                        backgroundColor='#00000000'
                        borderColor='#4d5358'
                        onPress={() => navigation.navigate('Stats')}
                    ></LRButton>
                </View>
                <View style={{
                    padding: 16,
                    position: 'relative',
                }}>

                    <Image source={
                        {
                            uri: "https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x289def7c85bb8517ca73b5f4a97a12aa103627de5cef84fbf924e679a9f7ffa0"
                        }
                    }
                        style={{
                            width: 350,
                            height: 350,
                            resizeMode: "contain",
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8
                        }}
                    ></Image>

                    <View style={{
                        position: 'absolute',
                        top: 32,
                        left: 32,
                        borderRadius: 16,
                        backgroundColor: '#343a3f',
                        height: 32,
                        width: 150,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text
                            style={{
                                color: '#ffffff',
                            }}
                        >Trending Collection</Text>
                    </View>

                    <View style={{
                        width: 350,
                        justifyContent: 'center',
                        padding: 16,
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderColor: "#ffffff29",
                        borderWidth: 1,
                        borderTopWidth: 0,
                    }}>

                        <Text style={{
                            color: '#ffffff',
                            fontSize: 16,
                            fontWeight: '600',
                        }}>Moonbirds</Text>
                    </View>

                </View>



                {/* Top collections */}

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 16,
                }}>
                    <Text className="text-3xl -text--lr-colors-text-01"> Top Collections Today</Text>
                </View>

                <View style={{
                    padding: 16
                }}>

                    {
                        data?.map((item, index) => {
                            return (
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
                                    index={index + 1} />
                            )
                        })
                    }


                </View>
            </ScrollView>
        </View>
    )
}

export default Home