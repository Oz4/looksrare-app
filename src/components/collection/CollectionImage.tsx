import { Skeleton } from "native-base";
import { useState } from "react";
import { Image } from "react-native";


const CollectionImage = ({ uri }: { uri: string | null }) => {

    const [isLoaded, setIsLoaded] = useState(false)

    if (!isLoaded)
        return (
            <>
                <Skeleton h={"92px"} w={"92px"} startColor="#121619" endColor={"#343A3F"} className="ml-4 border-[2px]" />
                {
                    uri &&
                    <Image
                        source={
                            {
                                uri
                            }
                        }
                        className="w-[92px] h-[92px] object-cover ml-4 border-[2px] hidden"
                        onLoad={() => { setIsLoaded(true) }}
                    />
                }
            </>
        )

    return (
        uri ?
            <Image source={
                {
                    uri
                }
            }
                className="w-[92px] h-[92px] object-cover ml-4 border-[2px]"
                style={{
                    borderRadius: 4,
                    borderColor: '#121619',
                    borderWidth: 2
                }}
            />
            :
            <Image
                source={
                    require("src/assets/looksrarePlaceHolderDark.jpg")
                }
                className="w-[92px] h-[92px] object-cover ml-4 border-[2px]"
                style={{
                    borderRadius: 4,
                    borderColor: '#121619',
                    borderWidth: 2
                }}
            />
    )
}

export default CollectionImage;