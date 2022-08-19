import { abbreviateNumber as _abbreviateNumber } from "js-abbreviation-number";

export const abbreviateNumber = (value: number | string, decimalPlaces: number = 0): string => {

    if (typeof value === "string")
        value = parseFloat(value)

    return _abbreviateNumber(value, decimalPlaces);

}