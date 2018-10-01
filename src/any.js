import is from './is';

/**
 *
 * @param {*} element the object or array to look through for specific value
 * @param {*} value the value to be looked for
 * @return boolean of if the element contains the value
 */
export function any(element, value) {
    let doesContain = false;
    if (is.array(element)) {
        for (const val of element) {
            if (val.toString() === value.toString()) {
                doesContain = true;
                break;
            }
        }
        return doesContain;
    }
    if (is.object(element)) {
        for (const key of Object.keys(element)) {
            if (element[key].toString() === value.toString()) {
                doesContain = true;
                break;
            }
        }
        return doesContain;
    }
}
export default {
    any
}
