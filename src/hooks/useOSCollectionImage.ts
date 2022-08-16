import { useQuery, UseQueryOptions } from "@tanstack/react-query";

interface OsCollectionResponse {
    banner: any | null;
    logo: any | null;
}

const emptyResponse: OsCollectionResponse = { banner: null, logo: null };

const fetchOsCollectionImages = async (collectionAddress: string): Promise<OsCollectionResponse> => {
    try {
        const response = await fetch(`https://api.opensea.io/api/v1/asset_contract/${collectionAddress}`);

        if (!response.ok) {
            return emptyResponse;
        }

        const data = await response.json();

        console.log(collectionAddress, data);
        
        if (data.success === "false") {
            return emptyResponse;
        }

        return {
            banner: { src: data.collection.banner_image_url },
            logo: { src: data.collection.image_url },
        };
    } catch {
        return emptyResponse;
    }
};

const cacheTime = 30 * 60 * 1000;

export const useOsCollectionImages = (
    collectionAddress: string,
    options?: UseQueryOptions<OsCollectionResponse, any, OsCollectionResponse>
) => {

    console.log(collectionAddress);
    
    return useQuery<OsCollectionResponse>(
        ["os-collection-image", collectionAddress],
        () => fetchOsCollectionImages(collectionAddress),
        { refetchOnWindowFocus: false, cacheTime, staleTime: cacheTime, ...options }
    );
};
