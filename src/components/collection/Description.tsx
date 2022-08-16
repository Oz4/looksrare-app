import { LRText } from "src/components/common"

const Description = ({
    description
}:{
    description: string
}) => {

    return (
        <LRText className='-text--lr-colors-text-02 text-sm'>
            {description}
        </LRText>
    )
}

export default Description