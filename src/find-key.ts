import { decode } from "./decode";

/**
 * findTheKey("scout", [20, 12, 18, 30, 21]);  =>  1939
   findTheKey("masterpiece", [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);  =>  1939 
   findTheKey("nomoretears", [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20]);  =>  12
 */
export function findTheKey(message: string, code: number[]): number {
    const lowerCasedMessage = message.toLowerCase();
    const encodedCharacters = Array.from(lowerCasedMessage).map(character => {
        return character.charCodeAt(0) - 96;
    });
    const keyNumbers = encodedCharacters.map((encodedChar, index) => {
        let targetNumber: number;
        if (index < code.length) {
            targetNumber = code[index] - encodedChar;
        } else {
            targetNumber = index;
        }
        return targetNumber;
    })
    return findShortestKey(keyNumbers, message);
}

function findShortestKey(keyNumbers: number[], message: string): number {
    const shortestKeys: number[] = keyNumbers.reduce<number[]>((acc, curr, currIndex) => {
        if (acc.length === 0 || !acc.includes(curr)) {
            return [...acc, curr];
        } else {
            const possibleIndexes = acc
                .map((alreadyKey, index) => alreadyKey === curr ? index : null)
                .filter(el => el !== null) as number[]

            const validIndices = possibleIndexes.every(index => index > 0)

            if (validIndices) {
                const existsAlready = possibleIndexes.some(possibleIndex => acc[possibleIndex - 1] === keyNumbers[currIndex - 1])
                if (!existsAlready) {
                    return [...acc, curr];
                }
            }
        }
        return acc;
    }, []);
    const parsedKey = parseInt(shortestKeys.join(''));
    const isValid = message.localeCompare(decode(keyNumbers, parsedKey));
    return isValid && parsedKey;
}
