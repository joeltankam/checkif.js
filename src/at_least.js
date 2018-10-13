import { isArray, isFunction, isObject } from './is/types';

/**
 * Returns whether values in an array/object match at least a number of time
 * @param {*} enumerable the array or object to check
 * @param {*} matcher the value or function to match
 * @param {Number} count the number of time
 * @param {Boolean} strict determines if all elements should strictly match the matcher value
 */
export default function atLeast(enumerable, matcher, count = 1, strict = false) {
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
        return atLeast(Object.values(enumerable), matcherFunction, count);
    }

    return false;
}
