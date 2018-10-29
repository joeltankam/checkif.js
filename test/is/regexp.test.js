import is from '../../src/is/regexp';

describe('isURI', () => {
    const uriFull = "http://abc:123abc@www.google.com/path1/path2?param1=value1?param2=value2#frag1=fragvalue1";
    test('returns true on correct URI string', () => {
        expect(is.uri(uriFull)).toBeTruthy();
    });
    const uriIncomplete = "http://abc:123abc@www.google.com";
    test('returns true on correct but incomplete URI string', () => {
        expect(is.uri(uriIncomplete)).toBeTruthy();
    });
    const basicURI = "ftp://www.test.com";
    test('returns true on correct but incomplete URI string', () => {
        expect(is.uri(basicURI)).toBeTruthy();
    });
    const notURI = "abcdef";
    test('returns false on incorrect URI string', () => {
        expect(is.uri(notURI)).toBeFalsy();
    });
});