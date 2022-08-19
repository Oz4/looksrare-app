import { View, Linking, TouchableOpacity } from "react-native"
import { LRText } from "src/components/common"
import { getAddressShortcut } from "src/utils"
import { Feather } from '@expo/vector-icons';

const Address = ({
    address
}: {
    address: string
}) => {

    return (
        <View className="w-40">
            <TouchableOpacity
                onPress={() => Linking.openURL(`https://etherscan.io/address/${address}`)}
            >
                <View className="flex-row items-baseline w-40">
                    <LRText className='-text--lr-colors-text-03 font-bold text-sm ml-4 mt-2 mr-1'>{getAddressShortcut(address)}</LRText>
                    <Feather name="external-link" size={18} color="#878D96" />
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default Address