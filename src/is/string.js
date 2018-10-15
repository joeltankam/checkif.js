import { isString } from './types';

/**
 * Determines whether a given string is lower case
 * @param {*} string the string to check
 * @returns {Boolean} `true` if the string is lower case; otherwise, `false`
 */
export function isLowerCase(string) {
    if (!isString(string)) return false;
    return string === string.toLowerCase();
}

/**
 * Determines whether a given string is upper case
 * @param {*} string the string to check
 * @returns {Boolean} `true` if the string is upper case; otherwise, `false`
 */
export function isUpperCase(string) {
    if (!isString(string)) return false;
    return string === string.toUpperCase();
}

export default {
    lowerCase: isLowerCase,
    upperCase: isUpperCase,
};
