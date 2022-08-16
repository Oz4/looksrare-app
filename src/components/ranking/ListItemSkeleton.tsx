import { Center, Skeleton, VStack } from 'native-base';
import { View } from 'react-native';

// exact px values are calculated to match the recylcer list view height
const ListItemSkeleton = () => {

    return (
        <View className="w-full h-[108.72px]">
            <View className='mt-[19px]'>
                <Skeleton h="70.72px" startColor="#121619" endColor={"#343A3F"} borderRadius={8}/>
            </View>
        </View>
    );

}

export default ListItemSkeleton
