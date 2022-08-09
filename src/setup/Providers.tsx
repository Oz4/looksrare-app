
import React, { useRef } from 'react'
import { TailwindProvider } from 'tailwindcss-react-native';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" // react-query is deprecated after v4 and migrated to @tanstack/react-query

const Providers = ({ children }: { children: React.ReactNode }) => {

    const reactQueryClient = useRef(new QueryClient())


    return (

        <QueryClientProvider client={reactQueryClient.current}>
            <TailwindProvider>
                {children}
            </TailwindProvider>
        </QueryClientProvider>

    )
}

export default Providers