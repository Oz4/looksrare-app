import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { request, gql } from 'graphql-request'
import { LOOKSRARE_ENDPOINT } from "src/data/constants";

export interface collectionResponseInterface {
    name: string | null
    description: string | null
    type: string | null
    logo: {
        src: string | null
    }
    banner: {
        src: string | null
    }
    isVerified: boolean
    isExplicit: boolean
    countOwners: string | null
    totalSupply: string | null
    points: string | null
    floorOrder: {
        price: string | null
    }
    floor: {
        floorPriceOS: string | null
        floorPrice: string | null
        floorChange24h: number | null
        floorChange7d: number | null
        floorChange30d: number | null
    }
    volume: {
        volumeAll: string | null
    }
}

const emptyResponse: collectionResponseInterface = {
    name: null,
    description: null,
    type: null,
    logo: {
        src: null,
    },
    banner: {
        src: null
    },
    isVerified: false,
    isExplicit: false,
    countOwners: null,
    totalSupply: null,
    points: null,
    floorOrder: {
        price: null
    },
    floor: {
        floorPriceOS: null,
        floorPrice: null,
        floorChange24h: null,
        floorChange7d: null,
        floorChange30d: null
    },
    volume: {
        volumeAll: null
    }
};

const QUERY = gql`

    query($address: Address!) {
        collection(address: $address) {
            name
            description
            type
            logo {
                src
            }
            banner {
                src
            }
            isVerified
            isExplicit
            countOwners
            totalSupply
            points
            floorOrder {
                price
            }
            floor {
                floorPriceOS
                floorPrice
                floorChange24h
                floorChange7d
                floorChange30d
            }
            volume {
                volumeAll
            }
        }
    } 

`
const fetchCollection = async (collectionAddress: string): Promise<collectionResponseInterface> => {

    const variables = {
        "address": collectionAddress
    }

    try {
        const response = await request(LOOKSRARE_ENDPOINT, QUERY, variables);

        console.log(response);


        if (!response) {
            return emptyResponse;
        }

        return response.collection as collectionResponseInterface

    } catch {
        
        return emptyResponse;
    }
};

const cacheTime = 30 * 60 * 1000;

export const useGetCollection = (
    collectionAddress: string,
    options?: UseQueryOptions<collectionResponseInterface, any, collectionResponseInterface>
) => {

    return useQuery<collectionResponseInterface>(
        ["collection", collectionAddress],
        () => fetchCollection(collectionAddress),
        { cacheTime, staleTime: cacheTime, ...options }
    );
};
