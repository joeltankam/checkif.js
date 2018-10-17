import is from '../../src/is/arithmetic';
import { testFalsyWithNullable } from '../utils';
import { testIntegrationWithAllHasCheckers } from '../has.test';

describe('isEven', () => {
    test('returns true on even numbers', () => {
        expect(is.even(10)).toBeTruthy();
        expect(is.even(8)).toBeTruthy();
    });
    test('returns false on odd numbers', () => {
        expect(is.even(11)).toBeFalsy();
        expect(is.even(13)).toBeFalsy();
    });
    testIntegrationWithAllHasCheckers(is.even, 2, 1, 3, 5);
    testFalsyWithNullable(is.even);
});

describe('isOdd', () => {
    test('returns true on odd numbers', () => {
        expect(is.odd(11)).toBeTruthy();
        expect(is.odd(13)).toBeTruthy();
    });
    test('returns false on even numbers', () => {
        expect(is.odd(10)).toBeFalsy();
        expect(is.odd(14)).toBeFalsy();
    });
    testIntegrationWithAllHasCheckers(is.odd, 1, 2, 4, 6);
    testFalsyWithNullable(is.odd);
});

describe('isInteger', () => {
    function testIsInteger() {
        test('returns true on integers', () => {
            expect(is.integer(12)).toBeTruthy();
            expect(is.integer(10.0)).toBeTruthy();
        });
        test('returns false on others', () => {
            expect(is.integer(3.14)).toBeFalsy();
            expect(is.integer(Number.MIN_VALUE)).toBeFalsy();
            expect(is.integer(Infinity)).toBeFalsy();
            expect(is.integer('6')).toBeFalsy();
        });
    }
    describe('Number.isInteger exists', () => {
        testIsInteger();
    });
    describe('Number.isInteger does not exist', () => {
        Number.isInteger = null;
        testIsInteger();
    })
    testIntegrationWithAllHasCheckers(is.integer, 1, 1.1, 1.2, 1.3);
    testFalsyWithNullable(is.integer);
});

describe('aliases', () => {
    test('int', () => {
        expect(is.int).toEqual(is.integer);
    });
});
