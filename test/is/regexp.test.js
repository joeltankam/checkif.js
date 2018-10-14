import is from '../../src/is/regexp';
import { testFalsyWithNullable } from '../utils';

describe('isLowerCase', () => {
    test('returns true', () => {
        expect(is.lowerCase('abc')).toBeTruthy();
        expect(is.lowerCase('abc 123')).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.lowerCase(1)).toBeFalsy();
        expect(is.lowerCase('Abc')).toBeFalsy();
        expect(is.lowerCase('ABC')).toBeFalsy();
    });
    testFalsyWithNullable(is.lowerCase);
});

describe('isUpperCase', () => {
    test('returns true', () => {
        expect(is.upperCase('ABC')).toBeTruthy();
        expect(is.upperCase('ABC 123')).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.upperCase(1)).toBeFalsy();
        expect(is.upperCase('aBC')).toBeFalsy();
        expect(is.upperCase('abc')).toBeFalsy();
    });
    testFalsyWithNullable(is.upperCase);
});
