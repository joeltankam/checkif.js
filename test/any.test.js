import any from '../src/any';

describe('any', () => {
    test('returns true', () => {
        expect(any([0,1,2,3], 0)).toBeTruthy();
        //expect(any([0,1,2,3], x => x === 0)).toBeTruthy();
        //expect(any({ x : 1, y : 1}, 1)).toBeTruthy();
        //expect(any({ x : 1, y : 1}, x => x === 1)).toBeTruthy();
    });
    /*test('returns false', () => {
        expect(any([0,1,2,3], 5)).toBeFalsy();
        expect(any([0,1,2,3], x => x === 5)).toBeFalsy();
        expect(any({ x : 1, y : 1}, 2)).toBeFalsy();
        expect(any({ x : 1, y : 1}, x => x === 2)).toBeFalsy();
    });*/
});