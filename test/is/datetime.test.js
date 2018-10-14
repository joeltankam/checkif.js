import is from '../../src/is/datetime';
import { testFalsyWithNullable } from '../utils';

describe('isPast', () => {
    test('returns true on past date objects', () => {
        expect(is.past(new Date(0))).toBeTruthy();
        expect(is.past(new Date(1000))).toBeTruthy();
        expect(is.past(new Date('April 30, 1993 16:40:00'))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.past(new Date('November 23, 3998 03:24:00'))).toBeFalsy();
        expect(is.past('November 23, 3998 03:24:00')).toBeFalsy();
        expect(is.past(new Date())).toBeFalsy();
    });
    testFalsyWithNullable(is.past);
});

describe('isFuture', () => {
    test('returns true on future date objects', () => {
        expect(is.future(new Date('November 23, 3998 03:24:00'))).toBeTruthy();
        expect(is.future(new Date('November 23, 5998 03:24:00'))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.future(new Date(0))).toBeFalsy();
        expect(is.future(new Date('April 30, 1993 16:40:00'))).toBeFalsy();
        expect(is.future(new Date())).toBeFalsy();
        expect(is.future('November 23, 3998 03:24:00')).toBeFalsy();
    });
    testFalsyWithNullable(is.future);
});

describe('isToday', () => {
    test('returns true on date objects set today', () => {
        let date = new Date();
        date.setHours(12);
        date.setMinutes(30);
        expect(is.today(new Date())).toBeTruthy();
        expect(is.today(date)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.today(new Date(0))).toBeFalsy();
        expect(is.today(new Date('April 30, 1993 16:40:00'))).toBeFalsy();
        expect(is.today('November 23, 3998 03:24:00')).toBeFalsy();
    });
    testFalsyWithNullable(is.today);
});

