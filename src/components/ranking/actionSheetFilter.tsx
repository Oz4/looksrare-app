import React from 'react'
import { Actionsheet, Box, Button, Center, Checkbox, Switch, Text, useDisclose, View } from 'native-base';
import { Feather } from '@expo/vector-icons';

interface Props {

    setIsVerified: React.Dispatch<React.SetStateAction<boolean>>,
    setSort: React.Dispatch<React.SetStateAction<string>>,
    isVerified: boolean,
    sort: "HIGHEST_24H" | "CHANGE_24H_DESC" | "HIGHEST_TOTAL",
}
const ActionSheetFilter = ({
    setIsVerified,
    setSort,
    isVerified,
    sort
}: Props) => {

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    return (
        <Center>
            <Button onPress={onOpen} className="rounded-full bg-[#00000000] ">
                <Feather name="filter" size={24} color="#F3F5F7" style={{
                    width: 24,
                    height: 24
                }} />
            </Button>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content className='-bg--lr-colors-ui-01'>

                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="16" color="gray.500" _dark={{
                            color: "gray.300"
                        }}>
                            Albums
                        </Text>
                    </Box>

                    <Actionsheet.Item className='-bg--lr-colors-ui-01 border-b -border--lr-colors-border-02'>
                        <View className='flex-row justify-between items-center w-[79%]'>
                            <Text className='-text--lr-colors-text-01 w-16'>
                                {isVerified ? " Verified" : "All"}
                            </Text>
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
                    </Actionsheet.Item>

                    <Actionsheet.Item className='-bg--lr-colors-ui-01 border-b  -border--lr-colors-border-02 mt-[1px]'>
                        <Text className='-text--lr-colors-text-01'>
                            Sort
                        </Text>
                    </Actionsheet.Item>

                    <Actionsheet.Item className='-bg--lr-colors-ui-01'>
                        <Checkbox value="info" colorScheme="info" isChecked={sort == 'HIGHEST_24H'} onChange={() => { setSort("HIGHEST_24H") }}>
                            <Text className='-text--lr-colors-text-01'>
                                24h Vol Change Asc
                            </Text>
                        </Checkbox>
                    </Actionsheet.Item>

                    <Actionsheet.Item className='-bg--lr-colors-ui-01'>
                        <Checkbox value="info" colorScheme="info" isChecked={sort == 'CHANGE_24H_DESC'} onChange={() => { setSort("CHANGE_24H_DESC") }}>
                            <Text className='-text--lr-colors-text-01'>
                                24h Vol Change Desc
                            </Text>
                        </Checkbox>
                    </Actionsheet.Item>

                    <Actionsheet.Item className='-bg--lr-colors-ui-01'>
                        <Checkbox value="info" colorScheme="info" isChecked={sort == 'HIGHEST_TOTAL'} onChange={() => { setSort("HIGHEST_TOTAL") }}>
                            <Text className='-text--lr-colors-text-01'>
                                Highest Total Vol
                            </Text>
                        </Checkbox>
                    </Actionsheet.Item>

                </Actionsheet.Content>
            </Actionsheet>
        </Center>);
}

export default ActionSheetFilter