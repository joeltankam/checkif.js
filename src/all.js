import { isArray, isFunction, isObject } from './is';

/**
 * Returns whether all values in an array/object matches
 * @param {*} enumerable the array or object to check
 * @param {*} matcher the value or function to match
 */
export default function all(enumerable, matcher) {
    let matcherFunction = matcher;
    if (!isFunction(matcher)) matcherFunction = x => x === matcher;
    if (isArray(enumerable)) {
        for (let i = 0; i < enumerable.length; i += 1) {
            if (!matcherFunction(enumerable[i])) return false;
        }
        return true;
    }
    if (isObject(enumerable)) {
        return all(Object.values(enumerable), matcher);
    }

    return false;
}
