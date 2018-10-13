import any from '../src/any';
import { testFalsyWithNullable } from './utils';

describe('any', () => {
    describe('on arrays', () => {
        test('with value matcher', () => {
            expect(any([0, 0, 0, 0], 0)).toBeTruthy();
            expect(any([0, 1, 1, 1], 0)).toBeTruthy();
            expect(any([1, 1, 1, 1], 0)).toBeFalsy();
        });
        test('with function matcher', () => {
            expect(any([true, true, true, true], x => x)).toBeTruthy();
            expect(any([true, false, false, false], x => x)).toBeTruthy();
            expect(any([false, false, false, false], x => x)).toBeFalsy();
        });
        test('strict mode', () => {
            let _function = () => false;
            expect(any([_function, _function], _function, true)).toBeTruthy();
            expect(any([_function, _function], _function, false)).toBeFalsy();
        });
    });
    describe('on objects', () => {
        test('with value matcher', () => {
            expect(any({ x: 0, y: 0, z: 0 }, 0)).toBeTruthy();
            expect(any({ x: 0, y: 1, z: 1 }, 0)).toBeTruthy();
            expect(any({ x: 1, y: 1, z: 1 }, 0)).toBeFalsy();
        });
        test('with function matcher', () => {
            expect(any({ x: true, y: true, z: true }, x => x)).toBeTruthy();
            expect(any({ x: true, y: false, z: false }, x => x)).toBeTruthy();
            expect(any({ x: false, y: false, z: false }, x => x)).toBeFalsy();
        });
        test('strict mode', () => {
            let _function = () => false;
            expect(any({ x: _function, y: _function }, _function, true)).toBeTruthy();
            expect(any({ x: _function, y: _function }, _function, false)).toBeFalsy();
        });
    });
    testFalsyWithNullable(any);
});
