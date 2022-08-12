
import React, { useRef } from 'react'
import { TailwindProvider } from 'tailwindcss-react-native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" // react-query is deprecated after v4 and migrated to @tanstack/react-query
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { extendTheme, NativeBaseProvider } from "native-base";



const Providers = ({ children }: { children: React.ReactNode }) => {

    const reactQueryClient = useRef(new QueryClient())

    const nativeBaseTheme = extendTheme({
        colors: {
            lr: {
                400: '#2DE370',
            },
        },
        components:{
            
        }
    });


    return (

        <QueryClientProvider client={reactQueryClient.current}>
            <NativeBaseProvider theme={nativeBaseTheme}>
                <TailwindProvider>
                    <ApplicationProvider {...eva} theme={eva.light}>
                        {children}
                    </ApplicationProvider>
                </TailwindProvider>
            </NativeBaseProvider>
        </QueryClientProvider >

    )
}

export default Providers