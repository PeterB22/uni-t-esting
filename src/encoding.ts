import { cypherMap } from "./cypher-map";

export const encoder = (base: string, key?: number): number[] => {
    if (key && key < 0) {
        key = 0;
    }
    const keyAsNumberArray = key ? String(key).split('').map(Number) : [0];
    const lowerCased = base.toLowerCase();
    const encodedCharacters = Array.from(lowerCased).map(character => {
        return cypherMap[character];
    });
    const result = encodedCharacters.map((encoded,index) => {
        let targetNumber: number;
        if (index < keyAsNumberArray.length) {
            targetNumber = keyAsNumberArray[index];
        } else {
            targetNumber = keyAsNumberArray[index % keyAsNumberArray.length];
        }
        return encoded + targetNumber; 
    });

    return result;
}
