import is from '../src/is';
import { testFalsyWithNullable } from './utils';
import { JSDOM } from 'jsdom';

describe('isObject', () => {
    test('returns true on objects', () => {
        expect(is.object({})).toBeTruthy();
        expect(is.object(new String(''))).toBeTruthy();
        expect(is.object(new Number(1))).toBeTruthy();
    });
    test('returns false on literals', () => {
        expect(is.object(false)).toBeFalsy();
        expect(is.object('')).toBeFalsy();
        expect(is.object(1)).toBeFalsy();
    });
    testFalsyWithNullable(is.object);
});

describe('isArray', () => {
    test('returns true on arrays', () => {
        expect(is.array([])).toBeTruthy();
        expect(is.array(new Array(0))).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.array(false)).toBeFalsy();
        expect(is.array('')).toBeFalsy();
        expect(is.array(1)).toBeFalsy();
    });
    testFalsyWithNullable(is.array);
});

describe('isBoolean', () => {
    test('returns true on booleans', () => {
        expect(is.boolean(false)).toBeTruthy();
        expect(is.boolean(true)).toBeTruthy();
        expect(is.boolean(Boolean(0))).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.boolean({})).toBeFalsy();
        expect(is.boolean('')).toBeFalsy();
        expect(is.boolean(1)).toBeFalsy();
        expect(is.boolean([])).toBeFalsy();
    });
    testFalsyWithNullable(is.boolean);
});

describe('isString', () => {
    test('returns true on strings', () => {
        expect(is.string('')).toBeTruthy();
        expect(is.string(String(''))).toBeTruthy();
        expect(is.string(new String(''))).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.string({})).toBeFalsy();
        expect(is.string(true)).toBeFalsy();
        expect(is.string(1)).toBeFalsy();
        expect(is.string([])).toBeFalsy();
    });
    testFalsyWithNullable(is.string);
});

describe('isChar', () => {
    test('returns true on chars', () => {
        expect(is.char('a')).toBeTruthy();
        expect(is.char('Z')).toBeTruthy();
        expect(is.char('1')).toBeTruthy();
        expect(is.char(' ')).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.char('')).toBeFalsy();
        expect(is.char('az')).toBeFalsy();
        expect(is.char(true)).toBeFalsy();
        expect(is.char(1)).toBeFalsy();
        expect(is.char([])).toBeFalsy();
    });
    testFalsyWithNullable(is.char);
});

describe('isDomNode', () => {
    test('returns true on chars', () => {
        let dom = new JSDOM(`<html !DOCTYPE><body><p></p></body></html>`);
        expect(is.domNode(dom.window.document.body.children[0])).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.domNode({})).toBeFalsy();
    });
    testFalsyWithNullable(is.domNode);
});

describe('isDate', () => {
    test('returns true on dates', () => {
        expect(is.date(new Date('December 17, 1995 03:24:00'))).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.date({})).toBeFalsy();
    });
    testFalsyWithNullable(is.date);
});

describe('isError', () => {
    test('returns true on errors', () => {
        expect(is.error(new Error(''))).toBeTruthy();
        expect(is.error(Error(''))).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.error({})).toBeFalsy();
    });
    testFalsyWithNullable(is.error);
});

describe('isFunction', () => {
    test('returns true on functions', () => {
        expect(is.function(function () { })).toBeTruthy();
        expect(is.function(x => x)).toBeTruthy();
        expect(is.function(new Function('x', 'return x'))).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.function({})).toBeFalsy();
    });
    testFalsyWithNullable(is.function);
});

describe('isPureObject', () => {
    test('returns true on json objects', () => {
        expect(is.pureObject({})).toBeTruthy();
        expect(is.pureObject({ value: 1 })).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.pureObject(new Date())).toBeFalsy();
        expect(is.pureObject(new String)).toBeFalsy();
    });
    testFalsyWithNullable(is.pureObject);
});

describe('isNaN', () => {
    test('returns true', () => {
        expect(is.nan(NaN)).toBeTruthy();
        expect(is.nan(Number.NaN)).toBeTruthy();
        expect(is.nan(Number('number'))).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.nan({})).toBeFalsy();
    });
    testFalsyWithNullable(is.nan);
});

describe('isNull', () => {
    test('returns true', () => {
        expect(is.null(null)).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.null({})).toBeFalsy();
    });
});

describe('isNumber', () => {
    test('returns true', () => {
        expect(is.number(Number(1))).toBeTruthy();
        expect(is.number(new Number(1))).toBeTruthy();
        expect(is.number(1)).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.number({})).toBeFalsy();
    });
    testFalsyWithNullable(is.number);
});

describe('isRegexp', () => {
    test('returns true', () => {
        expect(is.regexp(/a/)).toBeTruthy();
        expect(is.regexp(RegExp())).toBeTruthy();
        expect(is.regexp(new RegExp())).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.regexp({})).toBeFalsy();
    });
    testFalsyWithNullable(is.regexp);
});

describe('isUndefined', () => {
    test('returns true', () => {
        expect(is.undefined(undefined)).toBeTruthy();
        expect(is.undefined(void 0)).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.undefined({})).toBeFalsy();
    });
});

describe('isWindowObject', () => {
    test('returns true on chars', () => {
        let dom = new JSDOM(`<html !DOCTYPE></html>`);
        expect(is.windowObject(dom.window)).toBeTruthy();
    });
    test('returns false', () => {
        expect(is.windowObject({})).toBeFalsy();
    });
    testFalsyWithNullable(is.windowObject);
});
