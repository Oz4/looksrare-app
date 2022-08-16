export const getCachedImage = (url: string, width: number = 1600) => {

    const cachedURL = url.replace("https://static.looksnice.org/", "https://looksrare.mo.cloudinary.net/") + "?resource_type=image&f=auto&c=limit&w=" + width + "&q=auto"
    return cachedURL
    
}