
import React, { useRef } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { extendTheme, NativeBaseProvider, StatusBar, } from "native-base";
//@ts-ignore
import { TailwindProvider } from 'tailwindcss-react-native';
import * as NavigationBar from 'expo-navigation-bar';



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

    NavigationBar.setBackgroundColorAsync("#121619");
    NavigationBar.setVisibilityAsync('hidden');

    return (

        <QueryClientProvider client={reactQueryClient.current}>
            <NativeBaseProvider theme={nativeBaseTheme}>
                <TailwindProvider>
                    <StatusBar barStyle={"light-content"} backgroundColor={"#121619"} />
                    {children}
                </TailwindProvider>
            </NativeBaseProvider>
        </QueryClientProvider >

    )
}

export default Providers