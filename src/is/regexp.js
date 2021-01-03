import { isString, isNull } from './types';

function isSimpleEmailLocalPart(value) {
    const localPartPattern = /^([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~])+(\.([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~])+)*$/;
    return localPartPattern.test(value);
}
function isQuotedEmailLocalPart(value) {
    const localPartPattern = /^(\")((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e])|(\\[\x01-\x09\x0b\x0c\x0d-\x7f])))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\")$/i
    return localPartPattern.test(value);
}
function isEmailLocalPart(value) {
    return isSimpleEmailLocalPart(value) || isQuotedEmailLocalPart(value);
}
function isEmailDomain(value) {
    const emailDomainPattern = /^((([a-z]|\d)|(([a-z]|\d)([a-z]|\d|-|\.|_|~)*([a-z]|\d)))\.)+(([a-z])|(([a-z])([a-z]|\d|-|\.|_|~)*([a-z])))$/;
    return false;
}

/**
 * Determines whether a given string is an email
 * @param {*} value the string to check
 * @returns {Boolean} `true` if the string is an email; otherwise, `false`
 */
export function isEmail(value) {
    if (!isString(value)) return false;
    const globalEmailPattern = /^(.+)@(.+)$/i;
    const [, localPart, domain] = globalEmailPattern.exec(value) || [null, null];
    if (isNull(localPart)
        || isNull(domain)
        || localPart.length === 0
        || localPart.length > 255
        || domain.length === 0
        || domain.length > 63) return false;
    return isEmailLocalPart(localPart) && isEmailDomain(domain);
}

export default {
    email: isEmail,
};
