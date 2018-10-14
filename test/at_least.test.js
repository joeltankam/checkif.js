import { atLeast } from '../index';
import { atl } from '../index';
import { testFalsyWithNullable } from './utils';

describe('atLeast', () => {
    describe('on arrays', () => {
        test('with value matcher', () => {
            expect(atLeast([0, 0, 0, 0], 0, 2)).toBeTruthy();
            expect(atLeast([0, 0, 1, 1], 0, 2)).toBeTruthy();
            expect(atLeast([0, 1, 1, 1], 0, 2)).toBeFalsy();
            expect(atLeast([1, 1, 1, 1], 0, 1)).toBeFalsy();
            expect(atLeast([0, 0, 0, 0], 0, 5)).toBeFalsy();
        });
        test('with function matcher', () => {
            expect(atLeast([true, true, true, true], x => x, 2)).toBeTruthy();
            expect(atLeast([true, true, false, false], x => x, 2)).toBeTruthy();
            expect(atLeast([true, false, false, false], x => x, 2)).toBeFalsy();
            expect(atLeast([false, false, false, false], x => x, 1)).toBeFalsy();
            expect(atLeast([true, true, true, true], x => x, 5)).toBeFalsy();
        });
        test('strict mode', () => {
            let _function = () => false;
            expect(atLeast([_function, _function], _function, 2, true)).toBeTruthy();
            expect(atLeast([_function, _function], _function, 2, false)).toBeFalsy();
        });
    });
    describe('on objects', () => {
        test('with value matcher', () => {
            expect(atLeast({ x: 0, y: 0, z: 0 }, 0, 2)).toBeTruthy();
            expect(atLeast({ x: 0, y: 0, z: 1 }, 0, 2)).toBeTruthy();
            expect(atLeast({ x: 0, y: 1, z: 1 }, 0, 2)).toBeFalsy();
            expect(atLeast({ x: 1, y: 1, z: 1 }, 0, 1)).toBeFalsy();
            expect(atLeast({ x: 0, y: 0, z: 0 }, 0, 4)).toBeFalsy();
        });
        test('with function matcher', () => {
            expect(atLeast({ x: true, y: true, z: true }, x => x, 2)).toBeTruthy();
            expect(atLeast({ x: true, y: true, z: false }, x => x, 2)).toBeTruthy();
            expect(atLeast({ x: true, y: false, z: false }, x => x, 2)).toBeFalsy();
            expect(atLeast({ x: false, y: false, z: false }, x => x, 1)).toBeFalsy();
            expect(atLeast({ x: true, y: true, z: true }, x => x, 4)).toBeFalsy();
        });
        test('strict mode', () => {
            let _function = () => false;
            expect(atLeast({ x: _function, y: _function }, _function, 2, true)).toBeTruthy();
            expect(atLeast({ x: _function, y: _function }, _function, 2, false)).toBeFalsy();
        });
    });
    describe('aliases', ()=>{
        test('atl', () => {
            expect(atl).toEqual(atLeast);
        });
    });
    testFalsyWithNullable(atLeast);
});
