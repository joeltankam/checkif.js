import is from '../src/is/index';
import { has } from '../src/has';
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
}
