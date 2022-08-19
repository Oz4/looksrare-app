export const shortenString = (string: string, length: number): string => {

    if (string.length > length) {
        return string.substring(0, length) + '...'
    } else {
        return string
    }
}