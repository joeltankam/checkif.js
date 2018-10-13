import atMost from '../src/at_most';
import { testFalsyWithNullable } from './utils';

describe('atMost', () => {
    describe('on arrays', () => {
        test('with value matcher', () => {
            expect(atMost([0, 0, 0, 0], 0, 3)).toBeFalsy();
            expect(atMost([0, 0, 0, 1], 0, 3)).toBeTruthy();
            expect(atMost([0, 0, 1, 1], 0, 3)).toBeTruthy();
            expect(atMost([1, 1, 1, 1], 0, 3)).toBeTruthy();
            expect(atMost([1, 1, 1, 1], 0, 5)).toBeTruthy();
        });
        test('with function matcher', () => {
            expect(atMost([true, true, true, true], x => x, 3)).toBeFalsy();
            expect(atMost([true, true, true, false], x => x, 3)).toBeTruthy();
            expect(atMost([true, true, false, false], x => x, 3)).toBeTruthy();
            expect(atMost([false, false, false, false], x => x, 3)).toBeTruthy();
            expect(atMost([false, false, false, false], x => x, 5)).toBeTruthy();
        });
        test('strict mode', () => {
            let _function = () => true;
            expect(atMost([_function, _function, {}], _function, 2, true)).toBeTruthy();
            expect(atMost([_function, _function, {}], _function, 2, false)).toBeFalsy();
        });
    });
    describe('on objects', () => {
        test('with value matcher', () => {

            expect(atMost({ x: 0, y: 0, z: 0 }, 0, 2)).toBeFalsy();
            expect(atMost({ x: 0, y: 0, z: 1 }, 0, 2)).toBeTruthy();
            expect(atMost({ x: 1, y: 1, z: 1 }, 0, 2)).toBeTruthy();
            expect(atMost({ x: 1, y: 1, z: 1 }, 0, 3)).toBeTruthy();
        });
        test('with function matcher', () => {
            expect(atMost({ x: true, y: true, z: true }, x => x, 2)).toBeFalsy();
            expect(atMost({ x: true, y: true, z: false }, x => x, 2)).toBeTruthy();
            expect(atMost({ x: false, y: false, z: false }, x => x, 2)).toBeTruthy();
            expect(atMost({ x: false, y: false, z: false }, x => x, 3)).toBeTruthy();
        });
        test('strict mode', () => {
            let _function = () => true;
            expect(atMost({ x: _function, y: _function, z: {} }, _function, 2, true)).toBeTruthy();
            expect(atMost({ x: _function, y: _function, z: {} }, _function, 2, false)).toBeFalsy();
        });
    });
    testFalsyWithNullable(atMost);
});
