export function testFalsyWithNullable(_function) {
    test('returns false on nullable', () => {
        expect(_function(null)).toBeFalsy();
        expect(_function(undefined)).toBeFalsy();
        expect(_function()).toBeFalsy();
    });
}
