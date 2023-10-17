/**
 * decode([ 20, 12, 18, 30, 21],1939);  ==> "scout"
   decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8],1939);  ==>  "masterpiece"
 */
export const decode = (code: number[], key: number): string => {
    const keyAsNumberArray = String(key).split('').map(Number);
    const decodedCharacters = code.map((codeNumber, index) => {
        let targetNumber: number;
        if (index < keyAsNumberArray.length) {
            targetNumber = codeNumber - keyAsNumberArray[index];
        } else {
            targetNumber = codeNumber - keyAsNumberArray[index % keyAsNumberArray.length];
        }
        return String.fromCharCode(96 + targetNumber);
    })
    return decodedCharacters.join('');
}
