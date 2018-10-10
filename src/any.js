import { isArray, isFunction, isObject } from './is/types';

/**
 * Returns whether all values in an array/object matches
 * @param {*} enumerable the array or object to check
 * @param {*} matcher the value or function to match*
 * @param {Boolean} strict determines if all elements should strictly match the matcher value
 */
export default function any(enumerable, matcher, strict = false) {
    let matcherFunction = matcher;
    if (strict === true || !isFunction(matcher)) matcherFunction = x => x === matcher;
    if (isArray(enumerable)) {
        for (let i = 0; i < enumerable.length; i += 1) {
            if (matcherFunction(enumerable[i])) return true;
        }
        return false;
    }
    if (isObject(enumerable)) {
        return any(Object.values(enumerable), matcherFunction);
    }

    return false;
}
