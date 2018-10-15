import is from './is/index';
import any from './any';

function generateHasFunctions() {
    const hasFunctions = {};
    Object.keys(is).forEach((func) => {
        hasFunctions[func] = enumerable => any(enumerable, is[func]);
    });
    return hasFunctions;
}

/**
 * Determines whether any element in a specific array/object matches
 * a check from `is`. For the documentation of each function, check the equivalent
 * check in `is`.
 */
export default generateHasFunctions();
