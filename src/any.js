import { atLeast } from './count';

/**
 * Returns whether all values in an array/object matches
 * @param {*} enumerable the array or object to check
 * @param {*} matcher the value or function to match
 * @param {Boolean} strict determines if all elements should strictly match the matcher value
 */
export default function any(enumerable, matcher, strict = false) {
    return atLeast(enumerable, matcher, 1, strict);
}
