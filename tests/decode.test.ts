import { decode } from "../src/decode";

describe('Testing decode', () => {

    test('it works', () => {
        expect(decode([1], 0)).toEqual('a');
    });

})