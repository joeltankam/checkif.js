function downcaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

export function getFunctionShortName(func) {
    var name = func.name;
    if (name.startsWith('is'))
        name = downcaseFirstLetter(name.slice(2));
    return name;
}

export function testFalsyWithNullable(func) {
    test('returns false on nullable', () => {
        expect(func(null)).toBeFalsy();
        expect(func(undefined)).toBeFalsy();
        expect(func()).toBeFalsy();
    });
}
