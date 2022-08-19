import { Skeleton } from "native-base";
import { useState } from "react";
import { Image } from "react-native";

const Banner = ({
    uri
}: {
    uri: string | null
}) => {

    const [isLoaded, setIsLoaded] = useState(false)

    if (!isLoaded)
        return (
            <>
                <Skeleton h={"96px"} w={"100%"} startColor="#121619" endColor={"#343A3F"} className="-mb-10" />
                {
                    uri &&
                    <Image
                        source={
                            {
                                uri
                            }
                        }
                        className="w-full h-[96px] object-cover -mb-10 hidden"
                        onLoad={() => { setIsLoaded(true) }}
                    />
                }
            </>
        )


    return (
        uri ?
            <Image
                source={
                    {
                        uri
                    }
                }
                className="w-full h-[96px] object-cover -mb-10"
                onLayout={() => { setIsLoaded(true) }}
            />
            :
            <Image
                source={
                    require("src/assets/looksrarePlaceHolderDark.jpg")
                }
                className="w-full h-[96px] object-cover -mb-10"
            />
    )
}


export default Banner;