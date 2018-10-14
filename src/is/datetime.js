import { isDate } from './types';

/**
 * Determines whether a given value is a date object in the past
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a date object is in the past; otherwise, `false`
 */
function isPast(value) {
    if (!isDate(value)) return false;
    return value.getTime() - (new Date()).getTime() < 0;
}

/**
 * Determines whether a given value is a date object in the future
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a date object is in the future; otherwise, `false`
 */
function isFuture(value) {
    if (!isDate(value)) return false;
    return value.getTime() - (new Date()).getTime() > 0;
}

/**
 * Determines whether a given value is a date object in today
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a date object in today; otherwise, `false`
 */
function isToday(value) {
    if (!isDate(value)) return false;
    const now = new Date();
    return (value.getUTCFullYear() === now.getUTCFullYear()
        && value.getUTCMonth() === now.getUTCMonth()
        && value.getUTCDay() === now.getUTCDay());
}

export default {
    past: isPast,
    future: isFuture,
    today: isToday,
};
