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
 * @param {*} value the array / object to check
 * @param {*} criteria the criteria
 */
export function any(value, criteria) {
    let func = criteria;
    if (!is.function(criteria)) func = x => x === criteria;
    if (is.array(value)) return anyWithArray(value, func);
    if (is.object(value)) return anyWithObject(value, func);
    return false;
}

export default any;
