import is from '../../src/is/datetime';
import { testFalsyWithNullable } from '../utils';

describe('isPast', () => {
    test('returns true on past date objects', () => {
        expect(is.past(new Date(0))).toBeTruthy();
        expect(is.past(new Date(1000))).toBeTruthy();
        expect(is.past(new Date('April 30, 1993 16:40:00'))).toBeTruthy();
    });
    test('returns false on anything else', () => {
        let future = new Date();
        future.setFullYear(future.getFullYear() + 1);
        expect(is.past(future)).toBeFalsy();
        expect(is.past('November 23, 3998 03:24:00')).toBeFalsy();
        expect(is.past(new Date())).toBeFalsy();
    });
    testFalsyWithNullable(is.past);
});

describe('isFuture', () => {
    test('returns true on future date objects', () => {
        let future = new Date();
        future.setFullYear(future.getFullYear() + 1);
        expect(is.future(future)).toBeTruthy();
        future.setFullYear(future.getFullYear() + 5);
        expect(is.future(future)).toBeTruthy();
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
        date.setUTCHours(12);
        date.setUTCMinutes(30);
        expect(is.today(new Date())).toBeTruthy();
        expect(is.today(date)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.today(new Date(0))).toBeFalsy();
        expect(is.today(new Date('April 30, 1993 16:40:00'))).toBeFalsy();
        expect(is.today('November 23, 3998 03:24:00')).toBeFalsy();
        let future = new Date();
        future.setFullYear(future.getFullYear() + 1);
        expect(is.today(future)).toBeFalsy();
    });
    testFalsyWithNullable(is.today);
});

