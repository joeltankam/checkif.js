import { isArray, isFunction, isObject } from './is/types';

/**
 * Determines whether all values in an array/object matches
 * @param {*} enumerable the array or object to check
 * @param {*} matcher the value or function to match
 * @param {Boolean} strict determines if all elements should strictly match the matcher value
 * @returns {Boolean} `true` if all elements in the enumerable match the matcher; otherwise, `false`
 */
export default function all(enumerable, matcher, strict = false) {
    let matcherFunction = matcher;
    if (strict === true || !isFunction(matcher)) matcherFunction = x => x === matcher;
    if (isArray(enumerable)) {
        for (let i = 0; i < enumerable.length; i += 1) {
            if (!matcherFunction(enumerable[i])) return false;
        }
        return true;
    }
    if (isObject(enumerable)) {
        return all(Object.values(enumerable), matcherFunction);
    }

    return false;
}
