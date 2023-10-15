import { encoder } from "../src/encoding";

describe('Testing encoder', () => {

    describe('Testing same string against different keys', () => {

        test('simple string is converted into array of numbers', () => {
            expect(encoder('aloha')).toEqual([1, 12, 15, 8, 1]);
        })

        test('simple string is converted into array of numbers when key is 0', () => {
            expect(encoder('aloha', 0)).toEqual([1, 12, 15, 8, 1]);
        })

        test('string is converted with a one digit number', () => {
            expect(encoder('aloha', 7)).toEqual([8, 19, 22, 15, 8]);
        })

        test('string is converted with two digit number', () => {
            expect(encoder('aloha', 13)).toEqual([2, 15, 16, 11, 2]);
        })

        test('string is converted with eight digit number', () => {
            expect(encoder('aloha', 68795713)).toEqual([7, 20, 22, 17, 6]);
        })

        test('string is converted with same length key', () => {
            expect(encoder('scout', 19395)).toEqual([20, 12, 18, 30, 25])
        });

        test('string is converted with negative number key', () => {
            expect(encoder('multi', -15)).toEqual([13, 21, 12, 20, 9])
        })
    })

    describe('Testing different string against same key', () => {

        const key = 16778;

        test('string is converted even if it contains space characters', () => {
            expect(encoder('cool class', key)).toEqual([4, 21, 22, 19, NaN, 4, 18, 8, 26, 27])
        })
    })

});


