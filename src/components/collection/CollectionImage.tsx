import { Image } from "react-native";


const CollectionImage = ({ uri }: { uri: string }) => {

    return (
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
    )
}

export default CollectionImage;