import atMost from '../src/at_most';
import { testFalsyWithNullable } from './utils';

describe('atMost', () => {
    describe('on array', () => {
        test('returns true', () => {
            expect(atMost([0, 0, 1, 2], 0, 2)).toBeTruthy();
            expect(atMost([0, 0, 1, 1], 0, 3)).toBeTruthy();
            expect(atMost([true, true, true, false], x => x === true, 3)).toBeTruthy();
        });
        test('returns true when size exceeded', () => {
            expect(atMost([0, 0, 0, 0], 0, 10)).toBeTruthy();
        });
        test('returns false', () => {
            expect(atMost([0, 0, 1, 1], 0, 1)).toBeFalsy();
            expect(atMost([true, true, true, false], x => x === true, 2)).toBeFalsy();
        });
    });
    describe('on object', () => {
        test('returns true', () => {
            expect(atMost({ x: 1, y: 1 }, 1, 2)).toBeTruthy();
            expect(atMost({ x: 1, y: 0 }, 1, 1)).toBeTruthy();
            let a = {};
            expect(atMost({ x: a, y: a }, x => x === a, 3)).toBeTruthy();
        });
        test('returns false', () => {
            expect(atMost({ x: 1, y: 0 }, 1, 0)).toBeFalsy();
            let a = {};
            expect(atMost({ x: a, y: 0 }, x => x === a, 0)).toBeFalsy();
        });
    });
    describe('strict mode', () => {
        test('returns true', () => {
            let _function = x => x % 2;
            expect(atMost([_function, _function], _function, 2, true)).toBeTruthy();
            _function = function () { };
            expect(atMost({ x: _function, y: {} }, _function, 1, true)).toBeTruthy();
        });
        test('returns false', () => {
            let _function = function () { return true };
            expect(atMost({ x: _function, y: _function }, _function, 1)).toBeFalsy();
            expect(atMost([_function, _function], _function, 1, false)).toBeFalsy();
        });
    });
    testFalsyWithNullable(atMost);
});
