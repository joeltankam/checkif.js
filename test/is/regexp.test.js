import is from '../../src/is/regexp';
import { testFalsyWithNullable } from '../utils';
import { testIntegrationWithAllHasCheckers } from '../has.test';

describe('isEmail', () => {
    test('returns true on email strings', () => {
        expect(is.email('simple@example.com')).toBeTruthy();
        expect(is.email('very.common@example.com')).toBeTruthy();
        expect(is.email('disposable.style.email.with+symbol@example.com')).toBeTruthy();
        expect(is.email('other.email-with-hyphen@example.com')).toBeTruthy();
        expect(is.email('fully-qualified-domain@example.com')).toBeTruthy();
        expect(is.email('user.name+tag+sorting@example.com')).toBeTruthy();
        expect(is.email('x@example.com')).toBeTruthy();
        expect(is.email('example-indeed@strange-example.com')).toBeTruthy();
        expect(is.email('example@s.example')).toBeTruthy();
        expect(is.email('" "@example.org')).toBeTruthy();
        expect(is.email('"john..doe"@example.com')).toBeTruthy();
        expect(is.email('example.with.ip@[192.168.2.1')).toBeTruthy();
        expect(is.email('with(comment)@example.com')).toBeTruthy();
        expect(is.email('with@(comment)example.com')).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.email('Abc.example.com')).toBeFalsy();
        expect(is.email('@example.com')).toBeFalsy();
        expect(is.email('A@b@c@example.com')).toBeFalsy();
        expect(is.email('a"b(c)d,e:f;g<h>i[j\k]l@example.com')).toBeFalsy();
        expect(is.email('just"not"right@example.com')).toBeFalsy();
        expect(is.email('this is"not\allowed@example.com')).toBeFalsy();
        expect(is.email('this\ still\"not\\allowed@example.com')).toBeFalsy();
        expect(is.email('1234567890123456789012345678901234567890123456789012345678901234+x@example.com')).toBeFalsy();
        expect(is.email('john..doe@example.com')).toBeFalsy();
        expect(is.email('john.doe@example..com')).toBeFalsy();
    });
    testIntegrationWithAllHasCheckers(is.email, 'simple@example.com', '@not.email', 'not.email');
    testFalsyWithNullable(is.email);
});
