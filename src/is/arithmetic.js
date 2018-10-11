import types from './types';

/**
 * Returns whether a given value is even
 * @param {*} value the value to check
 */
export function isEven(value) {
    if (!types.number(value)) return false;
    return value % 2 === 0;
}

/**
 * Returns whether a given value is odd
 * @param {*} value the value to check
 */
export function isOdd(value) {
    if (!types.number(value)) return false;
    return !isEven(value);
}

export default {
    even: isEven,
    odd: isOdd,
};
