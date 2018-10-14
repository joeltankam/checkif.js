import { isNumber } from './types';

/**
 * Determines whether a given value is even
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is even; otherwise, `false`
 */
export function isEven(value) {
    if (!isNumber(value)) return false;
    return value % 2 === 0;
}

/**
 * Determines whether a given value is odd
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is odd; otherwise, `false`
 */
export function isOdd(value) {
    if (!isNumber(value)) return false;
    return value % 2 !== 0;
}

export default {
    even: isEven,
    odd: isOdd,
};
