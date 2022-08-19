import { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { LRText } from "src/components/common"
import { shortenString } from "src/utils"

const MAX_LEN = 30

const Description = ({
    description
}: {
    description: string
}) => {

    const [showMore, setShowMore] = useState(false)

    const ShowMoreButton = () => (
        <TouchableOpacity onPress={_ => setShowMore(prev => !prev)}>
            <LRText className="-text--lr-colors-interactive-01" weight="SemiBold">
                {!showMore ? "More" : "Less"}
            </LRText>
        </TouchableOpacity>
    )

    if (description.length <= 0) return <></>

    const className = showMore ? "mb-4 w-full flex-col" : "mb-4 w-full flex-row flex-wrap"
    
    return (
        <View className={className}>
            <LRText className='-text--lr-colors-text-02 text-sm'>
                {showMore ? description : shortenString(description, MAX_LEN)}
            </LRText>
            {description.length > MAX_LEN && <ShowMoreButton />}
        </View>
    )
}

export default Description