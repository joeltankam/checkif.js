import { isArray, isFunction, isObject } from './is/types';

/**
 * Returns whether values in an array/object match at most a number of time
 * @param {*} enumerable the array or object to check
 * @param {Number} count the number of time
 * @param {*} matcher the value or function to match
 * @param {Boolean} strict determines if all elements should strictly match the matcher value
 */
export default function atMost(enumerable, count, matcher, strict = false) {
    let matcherFunction = matcher;
    if (strict === true || !isFunction(matcher)) matcherFunction = x => x === matcher;
    if (isArray(enumerable)) {
        if (count >= enumerable.length) return true;
        let counter = 0;
        for (let i = 0; i < enumerable.length; i += 1) {
            if (matcherFunction(enumerable[i])) {
                counter += 1;
                if (counter > count) return false;
            }
        }
        return true;
    }
    if (isObject(enumerable)) {
        return atMost(Object.values(enumerable), count, matcherFunction);
    }

    return false;
}
