import is from './is/index';
import any from './any';
import all from './all';

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
