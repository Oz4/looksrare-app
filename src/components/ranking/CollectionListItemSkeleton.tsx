import { Center, Skeleton, VStack } from 'native-base';
import { View, Text, Dimensions, Button } from 'react-native'


const CollectionListItemSkeleton = () => {



    return (
        <Center w="100%">
            <VStack w="100%" borderWidth="1" space={4} overflow="hidden"  _dark={{
                borderColor: "#f5f5f500"
            }} _light={{
                borderColor: "#f5f5f500"
            }}>
                <Skeleton h="20" marginBottom={0} marginTop={4} startColor="#121619" endColor={"#343A3F"}/>
            </VStack>
        </Center>
    );



}

export default CollectionListItemSkeleton
