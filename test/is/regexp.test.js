import is from '../../src/is/regexp';
import { testFalsyWithNullable } from '../utils';
import { testIntegrationWithAllHasCheckers } from '../has.test';

describe('isEmail', () => {
    test('returns true on email strings', () => {
    });
    test('returns false on anything else', () => {
    });
    //testIntegrationWithAllHasCheckers(is.email, 'abc', 'A', 'B');
    testFalsyWithNullable(is.email);
});
