import { isString } from './types'
/*                |<---scheme--->| |<---------------------------------------userinfo---------------------------------------->||<--------------------------host--------------------------->||<-port->||<------------------------query---------------------------->||<------------fragment----------->|                         
                                   |<-----------username---------->| |<-----------------------password---------------------->|   
*/
const uriRegex = /^([a-z]+\:\/{2})(([a-zA-Z0-9]+([_ -]*[a-zA-Z0-9])*)(:[!#$%^&*\)(}{\[\]\\\|\/\~\`\;\"\'\?\>\<\+\-\.a-zA-Z0-9]*@)?)?([w]{3}\.)?([a-zA-Z0-9]+([_ -]*[a-zA-Z0-9])*\.[a-z]*)(\:[\d]*)?(\/[a-zA-Z0-9]+(\.[a-zA-Z]+)?)*((\?[a-zA-Z]+\=[a-zA-Z0-9]+)*)?((\#[a-zA-Z]+(\=[a-zA-Z0-9]+)?)*)?/;

/**
 * Determines whether a given value is a uri
 * @param {*} value the value to check
 * @returns {Boolean} `true` if the value is a URI; otherwise, `false`
 */
export function isURI(value) {
    if (isString(value)) {
        return uriRegex.test(value);
    } else {
        return false;
    }
}

export default {
    uri: isURI
}