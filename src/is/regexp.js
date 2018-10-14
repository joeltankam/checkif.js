import { isString } from './types';

/**
 * Returns whether a given value is lower case
 * @param {*} value the value to check
 */
export function isLowerCase(value) {
    if (!isString(value)) return false;
    return value === value.toLowerCase();
}

/**
 * Returns whether a given value is upper case
 * @param {*} value the value to check
 */
export function isUpperCase(value) {
    if (!isString(value)) return false;
    return value === value.toUpperCase();
}

export default {
    lowerCase: isLowerCase,
    upperCase: isUpperCase,
};
