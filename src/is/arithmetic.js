import { isNumber } from './types';

/**
<<<<<<< HEAD
 * Returns whether a given value is even
 * @param {*} value the value to check
=======
 * Determines whether a given value is even
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is even; otherwise, `false`
>>>>>>> 4b955c9ad1f8460321bbcb8246b365dac08575ed
 */
export function isEven(value) {
    if (!isNumber(value)) return false;
    return value % 2 === 0;
}

/**
<<<<<<< HEAD
 * Returns whether a given value is odd
 * @param {*} value the value to check
=======
 * Determines whether a given value is odd
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is odd; otherwise, `false`
>>>>>>> 4b955c9ad1f8460321bbcb8246b365dac08575ed
 */
export function isOdd(value) {
    if (!isNumber(value)) return false;
    return value % 2 !== 0;
}

export default {
    even: isEven,
    odd: isOdd,
};
