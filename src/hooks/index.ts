import { useGetCollections, Collection } from "./useGetCollections";
import { useGetTop5Collections } from "./useGetTop5Collections";
import { useGetCollectionTokens, NFTTokensInterface } from "./useGetCollectionTokens";
import { useOsCollectionImages } from "./useOSCollectionImage";
import { useGetCollection, collectionResponseInterface } from "./useGetCollection";

export {
    useGetCollections,
    useGetTop5Collections,
    useGetCollectionTokens,
    useOsCollectionImages,
    useGetCollection
}

export type {
    Collection,
    NFTTokensInterface,
    collectionResponseInterface
}