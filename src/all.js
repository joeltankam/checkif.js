import is from './is';

/**
 * Returns whether all values in the
 * array/object are equal to a given
 * value
 * @param {*} enumerable the array or object to check
 * @param {*} matcher the value or function to match
 */
export default function matchesAll(enumerable, matcher) {
    if (is.array(enumerable)) {
        if (is.function(matcher)) {
            for (let i = 0; i < enumerable.length; i += 1) {
                if (!matcher(enumerable[i])) return false;
            }
        } else {
            for (let i = 0; i < enumerable.length; i += 1) {
                if (enumerable[i] !== matcher) return false;
            }
        }

        return true;
    } else if (is.object(enumerable)) {
        return matchesAll(Object.values(enumerable), matcher);
    }

    return false;
}
