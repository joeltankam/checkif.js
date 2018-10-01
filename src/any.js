import is from './is';

/**
 *
 * @param {*} element the object or array to look through for specific value
 * @param {*} value the value to be looked for
 * @return boolean of if the element contains the value
 */
export function any(element, value) {
    let doesContain = false;
    if (!is.array(element) && !is.object(element)) {
        throw new Error('Element should be of array or object type.');
    }
    if (is.array(element)) {
        element.forEach((val) => {
            if (val.toString() === value.toString()) {
                doesContain = true;
            }
        });
    }
    if (is.object(element)) {
        Object.keys(element).forEach((key) =>  {
            if (element[key].toString() === value.toString()) {
                doesContain = true;
            }
        });
    }
    return doesContain;
}
export default {
    any,
};
