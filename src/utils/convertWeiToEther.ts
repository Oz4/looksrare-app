import { ethers } from "ethers";

export const convertWeiToEther = (number: string): string => {

    if (!number) return number
    return ethers.utils.formatEther(number)

}