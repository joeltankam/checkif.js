import all from '../src/all';
import { testFalsyWithNullable } from './utils';

describe('all', () => {
    describe('on array', () => {
        test('returns true', () => {
            expect(all([0, 0, 0, 0], 0)).toBeTruthy();
            expect(all([true, true, true, true], x => x === true)).toBeTruthy();
        });
        test('returns false', () => {
            expect(all([0, 1, 2, 3], 1)).toBeFalsy();
            expect(all([0, 1, 2, 3], x => x === 1)).toBeFalsy();
        });
    });
    describe('on object', () => {
        test('returns true', () => {
            expect(all({ x: 1, y: 1 }, 1)).toBeTruthy();
            let a = {};
            expect(all({ x: a, y: a }, x => x === a)).toBeTruthy();
        });
        test('returns false', () => {
            expect(all({ x: 1, y: true }, 1)).toBeFalsy();
            expect(all({ x: 0, y: new Number(0) }, x => x === 0)).toBeFalsy();
        });
    });
    describe('strict mode', () => {
        test('returns true', () => {
            let _function = x => x % 2;
            expect(all([_function, _function], _function, true)).toBeTruthy();
            _function = function () { };
            expect(all({ x: _function, y: _function }, _function, true)).toBeTruthy();
        });
        test('returns false', () => {
            let _function = x => x % 2;
            expect(all({ x: _function, y: _function }, _function)).toBeFalsy();
            _function = function () { };
            expect(all([_function, _function], _function, false)).toBeFalsy();
        });
    });
    testFalsyWithNullable(all);
});
