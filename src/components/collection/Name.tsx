import { MaterialIcons } from "@expo/vector-icons"
import { View } from "react-native"
import { LRText } from "src/components/common"

const Name = ({
    name,
    verified = false
}: {
    name: string
    verified?: boolean
}) => {

    return (
        <View className='flex-row items-baseline justify-start mt-4'>
            <LRText className="text-xl font-bold mr-1 -text--lr-colors-text-01 ml-4">{name}</LRText>
            {verified && <MaterialIcons name="verified" size={16} color="#4589FF" style={{ paddingTop: 2 }} />}
        </View>
    )

}

export default Name