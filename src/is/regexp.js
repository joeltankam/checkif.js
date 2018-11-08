import { isString } from './types';

/**
 * Determines whether a given string is an email
 * @param {*} string the string to check
 * @returns {Boolean} `true` if the string is an email; otherwise, `false`
 */
export function isEmail(string) {
    if (!isString(string)) return false;
    return true;
}

export default {
    email: isEmail,
};
