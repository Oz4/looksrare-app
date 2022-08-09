import { View, Text, Image } from 'react-native'
import React from 'react'


interface Props {
    address: string | null
    src: string | null
    name: string | null
    verified: boolean | null
    floor: string | null
    dailyVol: string | null
    totalVol: string | null
    owners: string | null
    items: string | null
    floorChange: number | null
    dailyVolChange: number | null
    index: number | null
}

const CollectionListItem = ({
    address,
    src,
    name,
    verified,
    floor,
    dailyVol,
    totalVol,
    owners,
    items,
    floorChange,
    dailyVolChange,
    index,
}: Props) => {
    return (
        <View className="flex-col">
            <View className="flex-row items-center">

                <Text className="-text--lr-colors-text-01 mr-2" >{index}</Text>


                {src && <Image source={{
                    uri: src,
                }}
                    style={{
                        width: 40,
                        height: 40,
                    }
                    }
                />
                }

                <Text className="-text--lr-colors-text-01 ml-2"
                >{name}</Text>
            </View>

            <View className="flex-col ml-20">
                <Text
                    style={{
                        color: "#fff",
                    }}
                >
                    {floor}
                </Text>
                <Text
                    style={{
                        color: "#fff",
                    }}
                >
                    {dailyVol}
                </Text>
                <Text
                    style={{
                        color: "#fff",
                    }}
                >
                    {totalVol}
                </Text>

                <Text
                    style={{
                        color: "#fff",
                    }}
                >
                    {owners}
                </Text>

                <Text
                    style={{
                        color: "#fff",
                    }}
                >
                    {items}
                </Text>
            </View>




        </View >
    )
}

export default CollectionListItem