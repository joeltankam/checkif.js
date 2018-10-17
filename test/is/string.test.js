import is from '../../src/is/string';
import { testFalsyWithNullable } from '../utils';
import { testIntegrationWithAllHasCheckers } from '../has.test';

describe('isLowerCase', () => {
    test('returns true on lower case strings', () => {
        expect(is.lowerCase('abc')).toBeTruthy();
        expect(is.lowerCase('abc 123')).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.lowerCase(1)).toBeFalsy();
        expect(is.lowerCase('Abc')).toBeFalsy();
        expect(is.lowerCase('ABC')).toBeFalsy();
    });
    testIntegrationWithAllHasCheckers(is.lowerCase, 'abc', 'A', 'B');
    testFalsyWithNullable(is.lowerCase);
});

describe('isUpperCase', () => {
    test('returns true on upper case strings', () => {
        expect(is.upperCase('ABC')).toBeTruthy();
        expect(is.upperCase('ABC 123')).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.upperCase(1)).toBeFalsy();
        expect(is.upperCase('aBC')).toBeFalsy();
        expect(is.upperCase('abc')).toBeFalsy();
    });
    testIntegrationWithAllHasCheckers(is.upperCase, 'ABC', 'a', 'b');
    testFalsyWithNullable(is.upperCase);
});
