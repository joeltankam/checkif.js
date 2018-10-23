import types from './types';
import arithmetic from './arithmetic';
import string from './string';
import datetime from './datetime';
import regexp from './regexp';

export default {
    ...types,
    ...arithmetic,
    ...string,
    ...datetime,
    ...regexp
};
