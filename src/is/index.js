import types from './types';
import regexp from './regexp';
import string from './string';
import arithmetic from './arithmetic';
import datetime from './datetime';

export default {
    ...types,
    ...regexp,
    ...string,
    ...arithmetic,
    ...datetime,
};
