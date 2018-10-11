import is from '../../src/is/arithmetic';
import { testFalsyWithNullable } from '../utils';

describe('isEven', () => {
    test('returns true on even numbers', () => {
        expect(is.even(10)).toBeTruthy();
    });
    test('returns false on odd numbers', () => {
        expect(is.even(11)).toBeFalsy();
    });
    testFalsyWithNullable(is.even);
});

describe('isOdd', () => {
    test('returns true on odd numbers', () => {
        expect(is.odd(11)).toBeTruthy();
    });
    test('returns false on even numbers', () => {
        expect(is.odd(10)).toBeFalsy();
    });
    testFalsyWithNullable(is.odd);
});