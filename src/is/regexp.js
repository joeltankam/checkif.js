import { isString } from './types';

/**
 * Determines whether a given value is lower case
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is lower case; otherwise, `false`
 */
export function isLowerCase(value) {
    if (!isString(value)) return false;
    return value === value.toLowerCase();
}

/**
 * Determines whether a given value is upper case
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is upper case; otherwise, `false`
 */
export function isUpperCase(value) {
    if (!isString(value)) return false;
    return value === value.toUpperCase();
}

export default {
    lowerCase: isLowerCase,
    upperCase: isUpperCase,
};
