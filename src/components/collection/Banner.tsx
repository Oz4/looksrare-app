import { Image } from "react-native";

const Banner = ({
    uri
}: {
    uri: string
}) => {
    return (

        <Image source={
            {
                uri
            }
        }
            className="w-full h-[96px] object-cover -mb-10"
        ></Image>
    )
}


export default Banner;