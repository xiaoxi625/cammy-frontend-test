import validator from 'validator';

export  function isEmpty(str) {
    return typeof str === 'string' && !str.trim() || typeof str === 'undefined' || str === null;
}

export function isEmail(email) {
    if (email) {
        return validator.isEmail(email.toString());
    } else {
        return false;
    }
}