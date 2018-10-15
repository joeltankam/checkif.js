import is from '../src/is/index';
import has from '../src/has';

describe('has', () => {
    test('contains all \'is\' methods', () => {
        Object.keys(is).forEach(func => {
            expect(is.function(has[func])).toBeTruthy();
        })
    })
})
