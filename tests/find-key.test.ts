import { findTheKey } from '../src/find-key';

describe('Testing find the key', () => {

    test('it works', () => {
        expect(findTheKey('a', [])).toBe(0);
    })

})