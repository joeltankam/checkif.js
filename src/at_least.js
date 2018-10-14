import { isArray, isFunction, isObject } from './is/types';

/**
 * Determines whether values in an array/object match at least a number of time
 * @param {*} enumerable the array or object to check
 * @param {Number} count the number of time
 * @param {*} matcher the value or function to match
 * @param {Boolean} strict determines if all elements should strictly match the matcher value
 * @returns {Boolean} `true` if at least a given number of elements in the enumerable
 * match the matcher; otherwise, `false`
 */
export default function atLeast(enumerable, count, matcher, strict = false) {
    let matcherFunction = matcher;
    if (strict === true || !isFunction(matcher)) matcherFunction = x => x === matcher;
    if (isArray(enumerable)) {
        if (count > enumerable.length) return false;
        let counter = 0;
        for (let i = 0; i < enumerable.length; i += 1) {
            if (matcherFunction(enumerable[i])) {
                counter += 1;
                if (counter >= count) return true;
            }
        }
        return false;
    }
    if (isObject(enumerable)) {
        return atLeast(Object.values(enumerable), count, matcherFunction);
    }

    return false;
}
