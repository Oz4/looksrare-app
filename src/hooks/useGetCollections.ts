import { useInfiniteQuery } from "@tanstack/react-query";
import { request, gql } from 'graphql-request'
import { LOOKSRARE_ENDPOINT } from "src/data/constants"

export interface Collection {
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


const getCollections = async (cursor = { index: 0, collection: "" }, isVerified = true, sort = "HIGHEST_24H") => {

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

  let variables: any = {
    "pagination": {
      "first": cursor.index
    },
    "filter": {
      "isVerified": isVerified
    },
    "sort": sort
  }
  if (cursor.index > 0)
    variables.pagination.cursor = cursor.collection

  return (await request(LOOKSRARE_ENDPOINT, query, variables)).collections as Collection[]

}


export const useGetCollections = (isVerified: boolean, sort: "HIGHEST_24H" | "CHANGE_24H_DESC" | "HIGHEST_TOTAL") => {

  const fetch = ({ pageParam }: any): Promise<Collection[]> => getCollections(pageParam, isVerified, sort)

  return useInfiniteQuery(["collections", isVerified, sort], fetch, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length >= 20)
        return {
          index: pages.length * 20,
          collection: lastPage[lastPage.length - 1].address
        }
      return undefined
    }
  })

}