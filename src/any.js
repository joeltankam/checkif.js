import is from './is';

/**
 * Check if any element verify a function
 * @param {*} value the array / object to check
 * @param {*} criteria the criteria
 */
export function any(value, criteria) {
    let func = criteria;
    if(!is.function(criteria)) func = x => x === criteria;
    if(is.array(value)) return anyWithArray(value, func);
    if(is.object(value)) return anyWithObject(value, func);
    return false;
}

function anyWithArray(value, func){
    for(let elt of value){
        if(func(elt)) return true;
    };
    return false;
}

function anyWithObject(value, func){
    for(let key in value){
        if(func(value[key])) return true;
    }
    return false;
}

export default any;