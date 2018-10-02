const { toString } = Object.prototype;

/**
 * Returns whether a given value is an object
 * @param {*} value the value to check
 */
export function isObject(value) {
    return Object(value) === value;
}

/**
 * Returns whether a given value is an Array
 * @param {*} value the value to check
 */
export function isArray(value) {
    if (Array.isArray) { return Array.isArray(value); }
    return toString.call(value) === '[object Array]';
}

/**
 * Returns whether a given value is Boolean
 * @param {*} value the value to check
 */
export function isBoolean(value) {
    return value === true || value === false || toString.call(value) === '[object Boolean]';
}

/**
 * Returns whether a given value is String
 * @param {*} value the value to check
 */
export function isString(value) {
    return toString.call(value) === '[object String]';
}

/**
 * Returns whether a given value is Char
 * @param {*} value the value to check
 */
export function isChar(value) {
    return isString(value) && value.length === 1;
}

/**
 * Returns whether a given value is Date Object
 * @param {*} value the value to check
 */
export function isDate(value) {
    return toString.call(value) === '[object Date]';
}

/**
 * Returns whether a given object is a DOM node
 * @param {*} object the object to check
 */
export function isDomNode(object) {
    return isObject(object) && object.nodeType > 0;
}

/**
 * Returns whether a given value is Error object
 * @param {*} value the value to check
 */
export function isError(value) {
    return toString.call(value) === '[object Error]';
}

/**
 * Returns whether a given value is function
 * @param {*} value the value to check
 */
export function isFunction(value) {
    // fallback check is for IE
    return typeof value === 'function' || toString.call(value) === '[object Function]';
}

/**
 * Returns whether given value is a pure JSON object
 * @param {*} value the value to check
 */
export function isJsonObject(value) {
    return toString.call(value) === '[object Object]';
}

// Returns whether a given value is NaN
export const { isNaN } = Number;

/**
 * Returns whether a given value is null
 * @param {*} value the value to check
 */
export function isNull(value) {
    return value === null;
}

/**
 * Returns whether a given value is number
 * @param {*} value the value to check
 */
export function isNumber(value) {
    return !isNaN(value) && toString.call(value) === '[object Number]';
}

/**
 * Returns whether a given value is RegExp
 * @param {*} value the value to check
 */
export function isRegexp(value) {
    return toString.call(value) === '[object RegExp]';
}

/**
 * Returns whether a given value is undefined
 * @param {*} value the value to check
 */
export function isUndefined(value) {
    return value === undefined;
}

/**
 * Returns whether a given value is window
 * @param {*} value the value to check
 */
export function isWindowObject(value) {
    return value != null && typeof value === 'object' && 'setInterval' in value;
}

/**
 * Returns whether all values in the 
 * array/object are equal to a given 
 * value
 * @param {*} enumerable the array or object to check
 * @param {*} matcher the value or function to match
 */
export function matchesAll(enumerable, matcher) {
    if (isArray(enumerable)) {
        if (isFunction(matcher)) {
            for (var i = 0; i < enumerable.length; i++) {
                if (!matcher(enumerable[i])) return false;
            }
        } else {
            for (var i = 0; i < enumerable.length; i++) {
                if (enumerable[i] !== matcher) return false;
            }
        }

        return true;
    } else if (isObject(enumerable)) {
        return matchesAll(Object.values(enumerable), matcher);
    }
        
    return false;
}

export default {
    object: isObject,
    array: isArray,
    boolean: isBoolean,
    string: isString,
    char: isChar,
    date: isDate,
    domNode: isDomNode,
    error: isError,
    function: isFunction,
    jsonObject: isJsonObject,
    nan: isNaN,
    null: isNull,
    number: isNumber,
    regexp: isRegexp,
    undefined: isUndefined,
    windowObject: isWindowObject,
    all: matchesAll,
};
