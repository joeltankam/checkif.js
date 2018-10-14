import all from '../src/all';
import { testFalsyWithNullable } from './utils';

describe('all', () => {
    describe('on arrays', () => {
        test('with value matcher', () => {
            expect(all([0, 0, 0, 0], 0)).toBeTruthy();
            expect(all([0, 1, 1, 1], 0)).toBeFalsy();
            expect(all([1, 1, 1, 1], 0)).toBeFalsy();
        });
        test('with function matcher', () => {
            expect(all([true, true, true, true], x => x)).toBeTruthy();
            expect(all([true, false, false, false], x => x)).toBeFalsy();
            expect(all([false, false, false, false], x => x)).toBeFalsy();
        });
        test('strict mode', () => {
            let _function = () => false;
            expect(all([_function, _function], _function, true)).toBeTruthy();
            expect(all([_function, _function], _function, false)).toBeFalsy();
        });
    });
    describe('on objects', () => {
        test('with value matcher', () => {
            expect(all({ x: 0, y: 0, z: 0 }, 0)).toBeTruthy();
            expect(all({ x: 0, y: 1, z: 1 }, 0)).toBeFalsy();
            expect(all({ x: 1, y: 1, z: 1 }, 0)).toBeFalsy();
        });
        test('with function matcher', () => {
            expect(all({ x: true, y: true, z: true }, x => x)).toBeTruthy();
            expect(all({ x: true, y: false, z: false }, x => x)).toBeFalsy();
            expect(all({ x: false, y: false, z: false }, x => x)).toBeFalsy();
        });
        test('strict mode', () => {
            let _function = () => false;
            expect(all({ x: _function, y: _function }, _function, true)).toBeTruthy();
            expect(all({ x: _function, y: _function }, _function, false)).toBeFalsy();
        });
    });
    testFalsyWithNullable(all);
});
