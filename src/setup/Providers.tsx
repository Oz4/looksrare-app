
import React, { useRef } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { extendTheme, NativeBaseProvider, StatusBar, } from "native-base";
//@ts-ignore
import { TailwindProvider } from 'tailwindcss-react-native';
import * as NavigationBar from 'expo-navigation-bar';

import { useFonts, Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';
import { Platform } from 'react-native';


const Providers = ({ children }: { children: React.ReactNode }) => {

    const reactQueryClient = useRef(new QueryClient())

    let [fontsLoaded] = useFonts({
        Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black
    });

    const nativeBaseTheme = extendTheme({
        colors: {
            lr: {
                400: '#2DE370',
            },
        },
        components: {

            Text: {
                baseStyle: {
                    fontFamily: 'Inter_400Regular',
                }
            }
        }
    });

    if (Platform.OS == 'android') {
        NavigationBar.setBackgroundColorAsync("#121619");
    }
    // NavigationBar.setVisibilityAsync('hidden');

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