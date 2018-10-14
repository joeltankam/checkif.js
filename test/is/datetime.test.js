import is from '../../src/is/datetime';
import { testFalsyWithNullable } from '../utils';

describe('isPast', () => {
    test('returns true on past date objects', () => {
        expect(is.past(new Date(0))).toBeTruthy();
        let past = new Date();
        past.setUTCFullYear(past.getUTCFullYear() - 1);
        expect(is.past(past)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        let future = new Date();
        future.setUTCFullYear(future.getUTCFullYear() + 1);
        expect(is.past(future)).toBeFalsy();
        future.setUTCFullYear(future.getUTCFullYear() + 5);
        expect(is.past(future)).toBeFalsy();
    });
    testFalsyWithNullable(is.past);
});

describe('isFuture', () => {
    test('returns true on future date objects', () => {
        let future = new Date();
        future.setUTCFullYear(future.getUTCFullYear() + 1);
        expect(is.future(future)).toBeTruthy();
        future.setUTCFullYear(future.getUTCFullYear() + 5);
        expect(is.future(future)).toBeTruthy();
    });
    test('returns false on anything else', () => {
        expect(is.future(new Date(0))).toBeFalsy();
        let past = new Date();
        past.setUTCFullYear(past.getUTCFullYear() - 1);
        expect(is.future(past)).toBeFalsy();
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
        let future = new Date();
        future.setUTCFullYear(future.getUTCFullYear() + 1);
        expect(is.today(future)).toBeFalsy();
        let past = new Date();
        past.setUTCFullYear(past.getUTCFullYear() - 1);
        expect(is.today(past)).toBeFalsy();
    });
    testFalsyWithNullable(is.today);
});

