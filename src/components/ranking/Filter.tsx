import React, { useEffect, useState } from 'react'
import { Button, Center, Checkbox, Switch, View } from 'native-base';
import { Feather } from '@expo/vector-icons';
import ActionSheet, { SheetManager } from "react-native-actions-sheet";
import { LRText } from 'src/components/common';

interface Props {

    setIsVerified: React.Dispatch<React.SetStateAction<boolean>>,
    setSort: React.Dispatch<React.SetStateAction<"HIGHEST_24H" | "CHANGE_24H_DESC" | "HIGHEST_TOTAL">>,
    isVerified: boolean
}

const Filter = ({
    setIsVerified,
    setSort,
    isVerified
}: Props) => {

    const [selectedCheckBox, setSelectedCheckBox] = useState(1)


    useEffect(() => {
        if (selectedCheckBox === 1)
            setSort("HIGHEST_24H")
        else if (selectedCheckBox === 2)
            setSort("CHANGE_24H_DESC")
        else if (selectedCheckBox === 3)
            setSort("HIGHEST_TOTAL")
    }, [selectedCheckBox]);


    return (
        <Center>
            <Button onPress={() => { SheetManager.show("mysheet") }} className="rounded-full bg-[#00000000]">
                <Feather name="filter" size={24} color="#F3F5F7" style={{
                    width: 24,
                    height: 24,
                    position: 'absolute',
                    right: 0
                }} />
            </Button>


            <ActionSheet
                id="mysheet"
                openAnimationSpeed={5}
                containerStyle={{
                    backgroundColor: '#21262A',
                }}
                // animated={false}
                bounceOnOpen={false}
                statusBarTranslucent={false}
                drawUnderStatusBar={false}
            >
                <View className='mx-4 py-4 flex-row justify-between items-center -border--lr-colors-border-02 border-b'>
                    <LRText className='-text--lr-colors-text-01 w-16'>
                        Verified
                    </LRText>
                    <Switch
                        colorScheme="primary"
                        size="md"
                        onToggle={() => {
                            setIsVerified(prev => !prev)
                        }}
                        onTrackColor="#2DE370"
                        isChecked={isVerified}
                    />
                </View>
                <View className='mx-4 py-4 flex-row justify-between items-center -border--lr-colors-border-02 border-b'>
                    <LRText className='-text--lr-colors-text-01'>
                        Sort
                    </LRText>
                </View>

                <View className='-bg--lr-colors-ui-01 mx-4 py-4'>
                    <Checkbox value="info" colorScheme="purple" isChecked={selectedCheckBox === 1} onChange={() => { setSelectedCheckBox(1) }}>
                        <LRText className='-text--lr-colors-text-01'>
                            24h Vol Change Asc
                        </LRText>
                    </Checkbox>
                </View>

                <View className='-bg--lr-colors-ui-01 mx-4 py-4'>
                    <Checkbox value="info" colorScheme="purple" isChecked={selectedCheckBox === 2} onChange={() => { setSelectedCheckBox(2) }}>
                        <LRText className='-text--lr-colors-text-01'>
                            24h Vol Change Desc
                        </LRText>
                    </Checkbox>
                </View>

                <View className='-bg--lr-colors-ui-01 mx-4 py-4'>
                    <Checkbox value="info" colorScheme="purple" isChecked={selectedCheckBox === 3} onChange={() => { setSelectedCheckBox(3) }}>
                        <LRText className='-text--lr-colors-text-01'>
                            Highest Total Vol
                        </LRText>
                    </Checkbox>
                </View>
            </ActionSheet>;
        </Center>);
}

export default Filter