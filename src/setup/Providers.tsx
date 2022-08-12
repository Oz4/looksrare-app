
import React, { useRef } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { extendTheme, NativeBaseProvider } from "native-base";
//@ts-ignore
import { TailwindProvider } from 'tailwindcss-react-native';


const Providers = ({ children }: { children: React.ReactNode }) => {

    const reactQueryClient = useRef(new QueryClient())

    const nativeBaseTheme = extendTheme({
        colors: {
            lr: {
                400: '#2DE370',
            },
        },
        components: {

        }
    });


    return (

        <QueryClientProvider client={reactQueryClient.current}>
            <NativeBaseProvider theme={nativeBaseTheme}>
                <TailwindProvider>
                    {children}
                </TailwindProvider>
            </NativeBaseProvider>
        </QueryClientProvider >

    )
}

export default Providers