import is from '../../src/is/types';
import { testFalsyWithNullable } from '../utils';
import { JSDOM } from 'jsdom';
import { testIntegrationWithHas } from '../has.test';

describe('isNull', () => {
    test('returns true on null', () => {
        expect(is.null(null)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.null({})).toBeFalsy();
    });
    testIntegrationWithHas(is.null, null, 0, {});
});

describe('isUndefined', () => {
    test('returns true on undefined', () => {
        expect(is.undefined(undefined)).toBeTruthy();
        expect(is.undefined(void 0)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.undefined({})).toBeFalsy();
    });
    testIntegrationWithHas(is.undefined, undefined, 0, {});
});

describe('isNullable', () => {
    test('returns true on nullable', () => {
        expect(is.nullable(null)).toBeTruthy();
        expect(is.nullable(undefined)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.nullable(0)).toBeFalsy();
        expect(is.nullable({})).toBeFalsy();
    });
    testIntegrationWithHas(is.nullable, null, 0, {});
});

describe('isNaN', () => {
    test('returns true on NaN', () => {
        expect(is.nan(NaN)).toBeTruthy();
        expect(is.nan(Number.NaN)).toBeTruthy();
        expect(is.nan(Number('number'))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.nan({})).toBeFalsy();
    });
    testIntegrationWithHas(is.nan, NaN, 0, 1);
    testFalsyWithNullable(is.nan);
});

describe('isArray', () => {
    function testIsArray() {
        test('returns true on arrays', () => {
            expect(is.array([])).toBeTruthy();
            expect(is.array(new Array(0))).toBeTruthy();
        });
        test('returns false on anything else', () => {
            expect(is.array(false)).toBeFalsy();
            expect(is.array('')).toBeFalsy();
            expect(is.array(1)).toBeFalsy();
        });
    }
    describe('Array.isArray exists', () => {
        testIsArray();
    });
    describe('Array.isArray does not exist', () => {
        Array.isArray = null;
        testIsArray();
    });
    testIntegrationWithHas(is.array, [], 0, {});
    testFalsyWithNullable(is.array);
});

describe('isBoolean', () => {
    test('returns true on booleans', () => {
        expect(is.boolean(false)).toBeTruthy();
        expect(is.boolean(true)).toBeTruthy();
        expect(is.boolean(Boolean(0))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.boolean({})).toBeFalsy();
        expect(is.boolean('')).toBeFalsy();
        expect(is.boolean(1)).toBeFalsy();
        expect(is.boolean([])).toBeFalsy();
    });
    testIntegrationWithHas(is.boolean, true, 0, {});
    testFalsyWithNullable(is.boolean);
});

describe('isString', () => {
    test('returns true on strings', () => {
        expect(is.string('')).toBeTruthy();
        expect(is.string(String(''))).toBeTruthy();
        expect(is.string(new String(''))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.string({})).toBeFalsy();
        expect(is.string(true)).toBeFalsy();
        expect(is.string(1)).toBeFalsy();
        expect(is.string([])).toBeFalsy();
    });
    testIntegrationWithHas(is.string, '', 0, {});
    testFalsyWithNullable(is.string);
});

describe('isChar', () => {
    test('returns true on chars', () => {
        expect(is.char('a')).toBeTruthy();
        expect(is.char('Z')).toBeTruthy();
        expect(is.char('1')).toBeTruthy();
        expect(is.char(' ')).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.char('')).toBeFalsy();
        expect(is.char('az')).toBeFalsy();
        expect(is.char(true)).toBeFalsy();
        expect(is.char(1)).toBeFalsy();
        expect(is.char([])).toBeFalsy();
    });
    testIntegrationWithHas(is.char, 'a', 0, {});
    testFalsyWithNullable(is.char);
});

describe('isDate', () => {
    test('returns true on dates', () => {
        expect(is.date(new Date('December 17, 1995 03:24:00'))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.date({})).toBeFalsy();
    });
    testIntegrationWithHas(is.date, new Date(), 0, {});
    testFalsyWithNullable(is.date);
});

describe('isNumber', () => {
    test('returns true on numbers', () => {
        expect(is.number(Number(1))).toBeTruthy();
        expect(is.number(new Number(1))).toBeTruthy();
        expect(is.number(1)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.number({})).toBeFalsy();
    });
    testIntegrationWithHas(is.number, 0, [], {});
    testFalsyWithNullable(is.number);
});

describe('isRegexp', () => {
    test('returns true on regular expressions', () => {
        expect(is.regexp(/a/)).toBeTruthy();
        expect(is.regexp(RegExp())).toBeTruthy();
        expect(is.regexp(new RegExp())).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.regexp({})).toBeFalsy();
    });
    testIntegrationWithHas(is.regexp, /a/, 'a', {});
    testFalsyWithNullable(is.regexp);
});

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
    testIntegrationWithHas(is.object, {}, 0, '');
    testFalsyWithNullable(is.object);
});

describe('isPureObject', () => {
    test('returns true on pure objects', () => {
        expect(is.pureObject({})).toBeTruthy();
        expect(is.pureObject({ value: 1 })).toBeTruthy();
    });
    test('returns false on objects', () => {
        expect(is.pureObject(new Date())).toBeFalsy();
        expect(is.pureObject(new String)).toBeFalsy();
    });
    testIntegrationWithHas(is.pure, {}, 0, '');
    testFalsyWithNullable(is.pureObject);
});

describe('isFunction', () => {
    test('returns true on functions', () => {
        expect(is.function(function () { })).toBeTruthy();
        expect(is.function(x => x)).toBeTruthy();
        expect(is.function(new Function('x', 'return x'))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.function({})).toBeFalsy();
    });
    testIntegrationWithHas(is.function, x => x, 0, {});
    testFalsyWithNullable(is.function);
});

describe('isError', () => {
    test('returns true on errors', () => {
        expect(is.error(new Error(''))).toBeTruthy();
        expect(is.error(Error(''))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.error({})).toBeFalsy();
    });
    testIntegrationWithHas(is.error, new Error(), 0, {});
    testFalsyWithNullable(is.error);
});

describe('isDomNode', () => {
    let dom = new JSDOM(`<html !DOCTYPE><body></body></html>`);
    const domNode = dom.window.document.body;
    test('returns true on dom nodes', () => {
        expect(is.domNode(domNode)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.domNode({})).toBeFalsy();
    });
    testIntegrationWithHas(is.domNode, domNode, 0, {});
    testFalsyWithNullable(is.domNode);
});

describe('isWindowObject', () => {
    const dom = new JSDOM(`<html !DOCTYPE></html>`);
    const windowObject = dom.window;
    test('returns true on window dom object', () => {
        expect(is.windowObject(windowObject)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.windowObject({})).toBeFalsy();
    });
    testIntegrationWithHas(is.windowObject, windowObject, 0, {});
    testFalsyWithNullable(is.windowObject);
});

describe('aliases', () => {
    test('und', () => {
        expect(is.arr).toEqual(is.array);
    });
    test('bool', () => {
        expect(is.bool).toEqual(is.boolean);
    });
    test('num', () => {
        expect(is.num).toEqual(is.number);
    });
    test('reg', () => {
        expect(is.reg).toEqual(is.regexp);
    });
    test('obj', () => {
        expect(is.obj).toEqual(is.object);
    });
    test('pure', () => {
        expect(is.pure).toEqual(is.pureObject);
    });
    test('func', () => {
        expect(is.func).toEqual(is.function);
    });
    test('err', () => {
        expect(is.err).toEqual(is.error);
    });
    test('dom', () => {
        expect(is.dom).toEqual(is.domNode);
    });
});

