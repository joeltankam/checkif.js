import types from './types';
import arithmetic from './arithmetic';
import regexp from './regexp';
import datetime from './datetime';

export default {
    ...types,
    ...arithmetic,
    ...regexp,
    ...datetime,
};
