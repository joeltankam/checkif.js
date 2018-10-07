import any from '../src/any';
import { testFalsyWithNullable } from './utils';

describe('any', () => {
    describe('on array', () => {
        test('returns true', () => {
            expect(any([0, 1, 2, 3], 2)).toBeTruthy();
            expect(any([0, 1, 2, 3], x => x === 0)).toBeTruthy();
        });
        test('returns false', () => {
            expect(any([0, 1, 2, 3], 5)).toBeFalsy();
            expect(any([0, 1, 2, 3], x => x === 5)).toBeFalsy();
        });
    });
    describe('on object', () => {
        test('returns true', () => {
            expect(any({ x: 1, y: 0 }, 1)).toBeTruthy();
            expect(any({ x: 1, y: 0 }, x => x === 1)).toBeTruthy();
        });
        test('returns false', () => {
            expect(any({ x: 1, y: 1 }, 2)).toBeFalsy();
            expect(any({ x: 1, y: 1 }, x => x === 2)).toBeFalsy();
        });
    });
    describe('strict mode', () => {
        test('returns true', () => {
            let _function = x => x % 2;
            expect(any([0, _function], _function, true)).toBeTruthy();
            expect(any({ x: 0, y: _function }, _function, true)).toBeTruthy();
        });
        test('returns false', () => {
            let _function = x => x % 2;
            expect(any([0, _function], _function, false)).toBeFalsy();
            expect(any({ x: 0, y: _function }, _function)).toBeFalsy();
        });
    });
    testFalsyWithNullable(any);
});
