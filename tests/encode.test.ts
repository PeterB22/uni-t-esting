import { encode } from "../src/encode";

describe('Testing encode', () => {

    test('it works', () => {
        expect(encode('a', 0)).toEqual([1]);
    })

});


