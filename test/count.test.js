import { atLeast } from '../src/count';
import { testFalsyWithNullable } from './utils';

describe('atLeast', () => {
    describe('on array', () => {
        test('returns true', () => {
            expect(atLeast([0, 0, 0, 0], 0, 2)).toBeTruthy();
            expect(atLeast([0, 0, 1, 1], 0, 2)).toBeTruthy();
            expect(atLeast([true, true, true, false], x => x === true, 3)).toBeTruthy();
        });
        test('returns false', () => {
            expect(atLeast([0, 0, 1, 1], 0, 3)).toBeFalsy();
            expect(atLeast([true, true, true, false], x => x === true, 4)).toBeFalsy();
        });
        test('returns false when size exceeded', () => {
            expect(atLeast([0, 0, 0, 0], 0, 5)).toBeFalsy();
        });
    });
    describe('on object', () => {
        test('returns true', () => {
            expect(atLeast({ x: 1, y: 1 }, 1, 1)).toBeTruthy();
            expect(atLeast({ x: 1, y: 0 }, 1, 1)).toBeTruthy();
            let a = {};
            expect(atLeast({ x: a, y: a }, x => x === a, 1)).toBeTruthy();
        });
        test('returns false', () => {
            expect(atLeast({ x: 1, y: 0 }, 1, 2)).toBeFalsy();
            let a = {};
            expect(atLeast({ x: a, y: 0 }, x => x === a, 2)).toBeFalsy();
        });
    });
    describe('strict mode', () => {
        test('returns true', () => {
            let _function = x => x % 2;
            expect(atLeast([_function, _function], _function, 2, true)).toBeTruthy();
            _function = function () { };
            expect(atLeast({ x: _function, y: {} }, _function, 1, true)).toBeTruthy();
        });
        test('returns false', () => {
            let _function = x => x % 2;
            expect(atLeast({ x: _function, y: _function }, _function, 1)).toBeFalsy();
            _function = function () { };
            expect(atLeast([_function, _function], _function, 1, false)).toBeFalsy();
        });
    });
    testFalsyWithNullable(atLeast);
});
