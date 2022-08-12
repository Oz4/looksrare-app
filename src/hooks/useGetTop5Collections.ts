import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { request, gql } from 'graphql-request'
import { LOOKSRARE_ENDPOINT } from "src/data/constants"

interface collectionStatistic {
    address: string
    countOwners: string
    floor: { floorPriceOS: string | null, floorPrice: string, floorChange24h: number, floorChange7d: number, floorChange30d: number }
    floorOrder: { price: string }
    isExplicit: boolean
    isVerified: boolean
    logo: { src: string, contentType: string }
    name: string
    points: null
    totalSupply: string
    type: string
    volume: { volume24h: string, change24h: number, volumeAll: string }
}


const getCollections = async (isVerified = true, sort = "HIGHEST_24H") => {

    const query = gql`
    query GetCollectionsBase($filter: CollectionFilterInput, $pagination: PaginationInput, $sort: CollectionSortInput) {
        collections(filter: $filter, pagination: $pagination, sort: $sort) {
          ...CollectionBaseFragment
        }
      }
      
    fragment CollectionBaseFragment on Collection {
      name
      address
      type
      logo {
        src
        contentType
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
        volume24h
        change24h
        volumeAll
      }
    }
  `

    const variables = {
        "pagination": {
            "first": 5,
            "cursor": ""
        },
        "filter": {
            "isVerified": isVerified
        },
        "sort": sort
    }

    return (await request(LOOKSRARE_ENDPOINT, query, variables)).collections as collectionStatistic[]

}


export const useGetTop5Collections = () => {

    const fetch = async (): Promise<collectionStatistic[]> => (await getCollections())

    return useQuery(["topCollections"], fetch)

}