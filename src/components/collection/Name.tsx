import { MaterialIcons } from "@expo/vector-icons"
import { View } from "react-native"
import { LRText } from "src/components/common"

const Name = () => {

    return (
        <View className='flex-row items-center justify-start mt-4'>
            <LRText className="text-xl font-bold mr-1 -text--lr-colors-text-01 ml-4">Terraforms</LRText>
            <MaterialIcons name="verified" size={16} color="#4589FF" />
        </View>
    )

}

export default Name