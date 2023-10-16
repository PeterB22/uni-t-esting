import { cypherMap } from "./cypher-map";

/**
 * Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
   Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
 */
export const encode = (message: string, key: number): number[] => {
    const keyAsNumberArray = String(key).split('').map(Number);
    const lowerCasedMessage = message.toLowerCase();
    const encodedCharacters = Array.from(lowerCasedMessage).map(character => {
        return cypherMap[character];
    });
    const result = encodedCharacters.map((encodedChar, index) => {
        let targetNumber: number;
        if (index < keyAsNumberArray.length) {
            targetNumber = keyAsNumberArray[index];
        } else {
            targetNumber = keyAsNumberArray[index % keyAsNumberArray.length];
        }
        return encodedChar + targetNumber;
    });

    return result;
}
