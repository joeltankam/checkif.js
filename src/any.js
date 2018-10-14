import atLeast from './at_least';

/**
 * Determines whether all values in an array/object matches
 * @param {*} enumerable the array or object to check
 * @param {*} matcher the value or function to match
 * @param {Boolean} strict determines if all elements should strictly match the matcher value
 * @returns {Boolean} `true` if any element in the enumerable matches the matcher;
 * otherwise, `false`
 */
export default function any(enumerable, matcher, strict = false) {
    return atLeast(enumerable, 1, matcher, strict);
}
