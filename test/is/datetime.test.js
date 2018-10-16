import is from '../../src/is/datetime';
import { testFalsyWithNullable } from '../utils';
import { testIntegrationWithHas } from '../has.test';

describe('isPast', () => {
    let past = new Date();
    past.setUTCFullYear(past.getUTCFullYear() - 1);
    test('returns true on past date objects', () => {
        expect(is.past(new Date(0))).toBeTruthy();
        expect(is.past(past)).toBeTruthy();
    });

    let future = new Date();
    future.setUTCFullYear(future.getUTCFullYear() + 1);
    test('returns false on anything else', () => {
        expect(is.past(future)).toBeFalsy();
        future.setUTCFullYear(future.getUTCFullYear() + 5);
        expect(is.past(future)).toBeFalsy();
    });
    testIntegrationWithHas(is.past, past, future)
    testFalsyWithNullable(is.past);
});

describe('isFuture', () => {
    let future = new Date();
    future.setUTCFullYear(future.getUTCFullYear() + 1);
    test('returns true on future date objects', () => {
        expect(is.future(future)).toBeTruthy();
        future.setUTCFullYear(future.getUTCFullYear() + 5);
        expect(is.future(future)).toBeTruthy();
    });

    let past = new Date();
    past.setUTCFullYear(past.getUTCFullYear() - 1);
    test('returns false on anything else', () => {
        expect(is.future(new Date(0))).toBeFalsy();
        expect(is.future(past)).toBeFalsy();
    });
    testIntegrationWithHas(is.future, future, past);
    testFalsyWithNullable(is.future);
});

describe('isToday', () => {
    let today = new Date();
    today.setUTCHours(12);
    today.setUTCMinutes(30);
    test('returns true on date objects set today', () => {
        expect(is.today(new Date())).toBeTruthy();
        expect(is.today(today)).toBeTruthy();
    });

    let future = new Date();
    future.setUTCFullYear(future.getUTCFullYear() + 1);
    let past = new Date();
    past.setUTCFullYear(past.getUTCFullYear() - 1);
    test('returns false on anything else', () => {
        expect(is.today(new Date(0))).toBeFalsy();
        expect(is.today(future)).toBeFalsy();
        expect(is.today(past)).toBeFalsy();
    });
    testIntegrationWithHas(is.today, today, past, future);
    testFalsyWithNullable(is.today);
});

