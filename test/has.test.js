import is from '../src/is/index';
import has from '../src/has';
import { getFunctionShortName } from './utils';

describe('has', () => {
    test('contains all \'is\' methods', () => {
        Object.keys(is).forEach(func => {
            expect(is.function(has[func])).toBeTruthy();
        });
    });
});


export function testIntegrationWithHas(func, truthyValue, ...falsyValues) {
    describe('integration with has', () => {
        var funcName = getFunctionShortName(func);
        test('returns true when array contains value', () => {
            expect(has[funcName]([truthyValue, ...falsyValues])).toBeTruthy();
        })
        test('returns false otherwise', () => {
            expect(has[funcName](falsyValues)).toBeFalsy();
        });
    });
}
