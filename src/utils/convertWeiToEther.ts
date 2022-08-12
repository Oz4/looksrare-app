import { ethers } from "ethers";

export const convertWeiToEther = (number: string): string => {

    if(!number) return number    
    return parseFloat(ethers.utils.formatEther(number)).toFixed(2)

}