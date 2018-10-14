import { atLeast } from '../index';
import { atl } from '../index';
import { testFalsyWithNullable } from './utils';

describe('atLeast', () => {
    describe('on arrays', () => {
        test('with value matcher', () => {
            expect(atLeast([0, 0, 0, 0], 2, 0)).toBeTruthy();
            expect(atLeast([0, 0, 1, 1], 2, 0)).toBeTruthy();
            expect(atLeast([0, 1, 1, 1], 2, 0)).toBeFalsy();
            expect(atLeast([1, 1, 1, 1], 1, 0)).toBeFalsy();
            expect(atLeast([0, 0, 0, 0], 5, 0)).toBeFalsy();
        });
        test('with function matcher', () => {
            expect(atLeast([true, true, true, true], 2, x => x)).toBeTruthy();
            expect(atLeast([true, true, false, false], 2, x => x)).toBeTruthy();
            expect(atLeast([true, false, false, false], 2, x => x)).toBeFalsy();
            expect(atLeast([false, false, false, false], 1, x => x)).toBeFalsy();
            expect(atLeast([true, true, true, true], 5, x => x)).toBeFalsy();
        });
        test('strict mode', () => {
            let _function = () => false;
            expect(atLeast([_function, _function], 2, _function, true)).toBeTruthy();
            expect(atLeast([_function, _function], 2, _function, false)).toBeFalsy();
        });
    });
    describe('on objects', () => {
        test('with value matcher', () => {
            expect(atLeast({ x: 0, y: 0, z: 0 }, 2, 0)).toBeTruthy();
            expect(atLeast({ x: 0, y: 0, z: 1 }, 2, 0)).toBeTruthy();
            expect(atLeast({ x: 0, y: 1, z: 1 }, 2, 0)).toBeFalsy();
            expect(atLeast({ x: 1, y: 1, z: 1 }, 1, 0)).toBeFalsy();
            expect(atLeast({ x: 0, y: 0, z: 0 }, 4, 0)).toBeFalsy();
        });
        test('with function matcher', () => {
            expect(atLeast({ x: true, y: true, z: true }, 2, x => x)).toBeTruthy();
            expect(atLeast({ x: true, y: true, z: false }, 2, x => x)).toBeTruthy();
            expect(atLeast({ x: true, y: false, z: false }, 2, x => x)).toBeFalsy();
            expect(atLeast({ x: false, y: false, z: false }, 1, x => x)).toBeFalsy();
            expect(atLeast({ x: true, y: true, z: true }, 4, x => x)).toBeFalsy();
        });
        test('strict mode', () => {
            let _function = () => false;
            expect(atLeast({ x: _function, y: _function }, 2, _function, true)).toBeTruthy();
            expect(atLeast({ x: _function, y: _function }, 2, _function, false)).toBeFalsy();
        });
    });
    describe('aliases', () => {
        test('atl', () => {
            expect(atl).toEqual(atLeast);
        });
    });
    testFalsyWithNullable(atLeast);
});
