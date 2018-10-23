const { toString } = Object.prototype;

/**
 * Determines whether a given value is null
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is null; otherwise, `false`
 */
export function isNull(value) {
    return value === null;
}

/**
 * Determines whether a given value is undefined
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is undefined; otherwise, `false`
 */
export function isUndefined(value) {
    return value === undefined;
}

/**
 * Determines whether a given value is nullable
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is nullable; otherwise, `false`
 */
export function isNullable(value) {
    return isUndefined(value) || isNull(value);
}

// Determines whether a given value is NaN
export const { isNaN } = Number;

/**
 * Determines whether a given value is NaN
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is NaN; otherwise, `false`
 */
export function isNan(value) {
    return isNaN(value);
}

/**
 * Determines whether a given value is an array
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is an array; otherwise, `false`
 */
export function isArray(value) {
    if (Array.isArray) { return Array.isArray(value); }
    return toString.call(value) === '[object Array]';
}

/**
 * Determines whether a given value is a boolean
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a boolean; otherwise, `false`
 */
export function isBoolean(value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
}

/**
 * Determines whether a given value is a string
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a string; otherwise, `false`
 */
export function isString(value) {
    return toString.call(value) === '[object String]';
}

/**
 * Determines whether a given value is a char
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a char; otherwise, `false`
 */
export function isChar(value) {
    return isString(value) && value.length === 1;
}

/**
 * Determines whether a given value is a date
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a date; otherwise, `false`
 */
export function isDate(value) {
    return toString.call(value) === '[object Date]';
}

/**
 * Determines whether a given value is a number
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a number; otherwise, `false`
 */
export function isNumber(value) {
    return !isNan(value) && toString.call(value) === '[object Number]';
}

/**
 * Determines whether a given value is a regular expression
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a regular expression; otherwise, `false`
 */
export function isRegexp(value) {
    return toString.call(value) === '[object RegExp]';
}

/**
 * Determines whether a given value is an object
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is an object; otherwise, `false`
 */
export function isObject(value) {
    return Object(value) === value;
}

/**
 * Determines whether given value is a pure object
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is pure object; otherwise, `false`
 */
export function isPureObject(value) {
    return toString.call(value) === '[object Object]';
}

/**
 * Determines whether a given value is a function
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a function; otherwise, `false`
 */
export function isFunction(value) {
    // fallback check is for IE
    return typeof value === 'function' || toString.call(value) === '[object Function]';
}

/**
 * Determines whether a given value is an error
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is an error; otherwise, `false`
 */
export function isError(value) {
    return toString.call(value) === '[object Error]';
}

/**
 * Determines whether a given object is a DOM node
 * @param {*} object the object to check
 * @returns {Boolean} `true` if the value is a DOM node; otherwise, `false`
 */
export function isDomNode(object) {
    return isObject(object) && object.nodeType > 0;
}

/**
 * Determines whether a given value is window object
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a window Object; otherwise, `false`
 */
export function isWindowObject(value) {
    return value != null && typeof value === 'object' && 'setInterval' in value;
}

/**
 * Determines whether a given value is a uri
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a URI; otherwise, `false`
 */
export function isURI(value) {
    if (isString(value)) {
        return uriRegex.test(value);
    } else {
        return false;
    }
}

export default {
    null: isNull,
    undefined: isUndefined,
    und: isUndefined,
    nullable: isNullable,
    nan: isNan,
    array: isArray,
    arr: isArray,
    boolean: isBoolean,
    bool: isBoolean,
    string: isString,
    str: isString,
    char: isChar,
    date: isDate,
    number: isNumber,
    num: isNumber,
    regexp: isRegexp,
    reg: isRegexp,
    object: isObject,
    obj: isObject,
    pureObject: isPureObject,
    pure: isPureObject,
    function: isFunction,
    func: isFunction,
    error: isError,
    err: isError,
    domNode: isDomNode,
    dom: isDomNode,
    windowObject: isWindowObject,
    window: isWindowObject,
    uri: isURI
};
