import { Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { LRButton } from 'src/components/common'

const Home = ({ navigation }) => {
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
                    <Text className="-text--lr-colors-text-01 text-5xl">Trade NFTs, Get Rewards</Text>
                </View>
                <View style={{
                    padding: 16
                }}>
                    <Text className="-text--lr-colors-text-02 text-base">
                        Buy  NFTs (or sell 'em) to <Text className="-text--lr-colors-link-01">earn rewards.</Text>
                        Explore the market to get started.
                    </Text>
                </View>

                <View style={{
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <LRButton
                        title="List an NFT"
                        mr={8}
                        color="#000000"
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
                    position: 'relative'
                }}>

                    <Image source={
                        {
                            uri: "https://looksrare.mo.cloudinary.net/0x23581767a106ae21c074b2276D25e5C3e136a68b/0x289def7c85bb8517ca73b5f4a97a12aa103627de5cef84fbf924e679a9f7ffa0"
                        }
                    }
                        style={{
                            width: 380,
                            height: 380,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16
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
                        width: 380,
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
                    <Text className="text-3xl -bg--lr-colors-text-01"> Top Collections Today</Text>
                </View>

                <View style={{
                    padding: 16
                }}>
                    <Text>Test</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home