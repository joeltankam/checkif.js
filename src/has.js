import is from './is/index';
import any from './any';
import all from './all';
import atLeast from './at_least';
import atMost from './at_most';

const allHasCheckers = {
    has: {},
    hasOnly: {},
};
Object.keys(is).forEach((func) => {
    allHasCheckers.has[func] = enumerable => any(enumerable, is[func]);
    allHasCheckers.hasOnly[func] = enumerable => all(enumerable, is[func]);
});

export default allHasCheckers;

/**
 * Determines whether any element in a specific array/object matches
 * a check from `is`. For the documentation of each function, check the equivalent
 * check in `is`.
 */
export const { has } = allHasCheckers;

/**
 * Determines whether all elements in a specific array/object match
 * a check from `is`. For the documentation of each function, check the equivalent
 * check in `is`.
 */
export const { hasOnly } = allHasCheckers;

/**
 * Determines whether values in an array/object match at least a number of time
 * a check from `is`. For the documentation of each function, check the equivalent
 * check in `is`.
 * @param {Number} count the number of time
 * @returns {*} an object containing all checks from `is`
 */
export function hasAtLeast(count) {
    const hasAtLeastCheckerFunctions = {};
    Object.keys(is).forEach((func) => {
        hasAtLeastCheckerFunctions[func] = enumerable => atLeast(enumerable, count, is[func]);
    });
    return hasAtLeastCheckerFunctions;
}

/**
 * Determines whether values in an array/object match at most a number of time
 * a check from `is`. For the documentation of each function, check the equivalent
 * check in `is`.
 * @param {Number} count the number of time
 * @returns {*} an object containing all checks from `is`
 */
export function hasAtMost(count) {
    const hasAtMostCheckerFunctions = {};
    Object.keys(is).forEach((func) => {
        hasAtMostCheckerFunctions[func] = enumerable => atMost(enumerable, count, is[func]);
    });
    return hasAtMostCheckerFunctions;
}
