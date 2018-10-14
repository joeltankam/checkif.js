import { atl, atLeast, atMost } from '../index';
import { atm } from '../index';
import { testFalsyWithNullable } from './utils';

describe('atMost', () => {
    describe('on arrays', () => {
        test('with value matcher', () => {
            expect(atMost([0, 0, 0, 0], 3, 0)).toBeFalsy();
            expect(atMost([0, 0, 0, 1], 3, 0)).toBeTruthy();
            expect(atMost([0, 0, 1, 1], 3, 0)).toBeTruthy();
            expect(atMost([1, 1, 1, 1], 3, 0)).toBeTruthy();
            expect(atMost([1, 1, 1, 1], 5, 0)).toBeTruthy();
        });
        test('with function matcher', () => {
            expect(atMost([true, true, true, true], 3, x => x)).toBeFalsy();
            expect(atMost([true, true, true, false], 3, x => x)).toBeTruthy();
            expect(atMost([true, true, false, false], 3, x => x)).toBeTruthy();
            expect(atMost([false, false, false, false], 3, x => x)).toBeTruthy();
            expect(atMost([false, false, false, false], 5, x => x)).toBeTruthy();
        });
        test('strict mode', () => {
            let _function = () => true;
            expect(atMost([_function, _function, {}], 2, _function, true)).toBeTruthy();
            expect(atMost([_function, _function, {}], 2, _function, false)).toBeFalsy();
        });
    });
    describe('on objects', () => {
        test('with value matcher', () => {

            expect(atMost({ x: 0, y: 0, z: 0 }, 2, 0)).toBeFalsy();
            expect(atMost({ x: 0, y: 0, z: 1 }, 2, 0)).toBeTruthy();
            expect(atMost({ x: 1, y: 1, z: 1 }, 2, 0)).toBeTruthy();
            expect(atMost({ x: 1, y: 1, z: 1 }, 3, 0)).toBeTruthy();
        });
        test('with function matcher', () => {
            expect(atMost({ x: true, y: true, z: true }, 2, x => x)).toBeFalsy();
            expect(atMost({ x: true, y: true, z: false }, 2, x => x)).toBeTruthy();
            expect(atMost({ x: false, y: false, z: false }, 2, x => x)).toBeTruthy();
            expect(atMost({ x: false, y: false, z: false }, 3, x => x)).toBeTruthy();
        });
        test('strict mode', () => {
            let _function = () => true;
            expect(atMost({ x: _function, y: _function, z: {} }, 2, _function, true)).toBeTruthy();
            expect(atMost({ x: _function, y: _function, z: {} }, 2, _function, false)).toBeFalsy();
        });
    });
    describe('aliases', () => {
        test('atm', () => {
            expect(atm).toEqual(atMost);
        });
    });
    testFalsyWithNullable(atMost);
});
