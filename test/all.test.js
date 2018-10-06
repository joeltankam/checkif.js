import all from '../src/all';

describe('matchesAll (value)', () => {
    test('returns true on matching array', () => {
        expect(all([0, 0, 0, 0], 0)).toBeTruthy();
    });
    test('returns false on mismatching array', () => {
        expect(all([0, 1, 2, 3], 0)).toBeFalsy();
    });
    test('returns false on mismatching array', () => {
        expect(all([0, '0'], 0)).toBeFalsy();
    });

    test('returns true on matching object', () => {
        expect(all({ a: 0, b: 0, c: 0, d: 0 }, 0)).toBeTruthy();
    });
    test('returns false on mismatching object', () => {
        expect(all({ a: 0, b: 1, c: 2, d: 3 }, 0)).toBeFalsy();
    });
    test('returns false on mismatching object', () => {
        expect(all({ a: 0, b: '0' }, 0)).toBeFalsy();
    });
});

describe('matchesAll (function)', () => {
    test('returns true on matching array', () => {
        expect(all([0, 0, 0, 0], x => x === 0)).toBeTruthy();
    });
    test('returns false on mismatching array', () => {
        expect(all([0, 1, 2, 3], x => x === 0)).toBeFalsy();
    });
    test('returns false on mismatching array', () => {
        expect(all([0, '0'], x => x === 0)).toBeFalsy();
    });

    test('returns true on matching object', () => {
        expect(all({ a: 0, b: 0, c: 0, d: 0 }, x => x === 0)).toBeTruthy();
    });
    test('returns false on mismatching object', () => {
        expect(all({ a: 0, b: 1, c: 2, d: 3 }, x => x === 0)).toBeFalsy();
    });
    test('returns false on mismatching object', () => {
        expect(all({ a: 0, b: '0' }, x => x === 0)).toBeFalsy();
    });
});
