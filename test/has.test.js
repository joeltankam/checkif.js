import is from '../src/is/index';
import { has, hasAtLeast, hasAtMost } from '../src/has';
import { hasOnly } from '../src/has';
import { getFunctionShortName } from './utils';

describe('has', () => {
    test('contains all \'is\' methods', () => {
        Object.keys(is).forEach(func => {
            expect(is.function(has[func])).toBeTruthy();
        });
    });
});
describe('hasOnly', () => {
    test('contains all \'is\' methods', () => {
        Object.keys(is).forEach(func => {
            expect(is.function(hasOnly[func])).toBeTruthy();
        });
    });
});
describe('hasAtLeast', () => {
    test('contains all \'is\' methods', () => {
        var hasAtl = hasAtLeast(0);
        Object.keys(is).forEach(func => {
            expect(is.function(hasAtl[func])).toBeTruthy();
        });
    });
});
describe('hasAtMost', () => {
    test('contains all \'is\' methods', () => {
        var hasAtm = hasAtMost(0);
        Object.keys(is).forEach(func => {
            expect(is.function(hasAtm[func])).toBeTruthy();
        });
    });
});

export function testIntegrationWithAllHasCheckers(func, truthyValue, ...falsyValues) {
    describe('integration with has', () => {
        var funcName = getFunctionShortName(func);
        test('returns true when array contains value', () => {
            expect(has[funcName]([truthyValue, ...falsyValues])).toBeTruthy();
        });
        test('returns false otherwise', () => {
            expect(has[funcName](falsyValues)).toBeFalsy();
        });
    });
    describe('integration with hasOnly', () => {
        var funcName = getFunctionShortName(func);
        test('returns true when all elements of the array match', () => {
            expect(hasOnly[funcName]([truthyValue, truthyValue])).toBeTruthy();
        });
        test('returns false otherwise', () => {
            expect(hasOnly[funcName](falsyValues)).toBeFalsy();
            expect(hasOnly[funcName]([truthyValue, ...falsyValues])).toBeFalsy();
        });
    });
    describe('integration with hasAtLeast', () => {
        var funcName = getFunctionShortName(func);
        test('returns true when all elements of the array match', () => {
            expect(hasAtLeast(1)[funcName]([truthyValue, ...falsyValues])).toBeTruthy();
            expect(hasAtLeast(2)[funcName]([truthyValue, truthyValue])).toBeTruthy();
        });
        test('returns false otherwise', () => {
            expect(hasAtLeast(1)[funcName](falsyValues)).toBeFalsy();
            expect(hasAtLeast(2)[funcName]([truthyValue, ...falsyValues])).toBeFalsy();
        });
    });
    describe('integration with hasAtMost', () => {
        var funcName = getFunctionShortName(func);
        test('returns true when all elements of the array match', () => {
            expect(hasAtMost(1)[funcName](falsyValues)).toBeTruthy();
            expect(hasAtMost(1)[funcName]([truthyValue, ...falsyValues])).toBeTruthy();
        });
        test('returns false otherwise', () => {
            expect(hasAtMost(0)[funcName]([truthyValue])).toBeFalsy();
            expect(hasAtMost(1)[funcName]([truthyValue, truthyValue])).toBeFalsy();
        });
    });
}
