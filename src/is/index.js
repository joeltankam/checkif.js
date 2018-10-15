import types from './types';
import arithmetic from './arithmetic';
import string from './string';
import datetime from './datetime';

export default {
    ...types,
    ...arithmetic,
    ...string,
    ...datetime,
};
