import is from './is';

function anyWithArray(value, func) {
    let found = false;
    value.forEach((elt) => {
        if (func(elt)) {
            found = true;
            return found;
        }
    });
    return found;
}

function anyWithObject(value, func) {
    let found = false;
    Object.keys(value).forEach((key) => {
        if (func(value[key])) {
            found = true;
            return found;
        }
    });
    return found;
}

/**
 * Check if any element verify a function
 * @param {*} enumerable the array / object to check
 * @param {*} matcher the criteria
 */
export function any(enumerable, matcher) {
    let func = matcher;
    if (!is.function(matcher)) func = x => x === matcher;
    if (is.array(enumerable)) return anyWithArray(enumerable, func);
    if (is.object(enumerable)) return anyWithObject(enumerable, func);
    return false;
}

export default any;
