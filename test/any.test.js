import { any } from '../src/any';

describe('any array', () => {
    describe('number tests', () => {
        let numArrayToSearch;
        beforeEach(() => {
            numArrayToSearch = [15, 102, 34, 16, 2, 8];
        });
        test('does contain', () => {
            const found = any(numArrayToSearch, 102);
            expect(found);
        });
        test('does not contain', () => {
            const notFound = any(numArrayToSearch, 1);
            expect(!notFound);
        });
    });
    describe('string tests', () => {
        let stringArrayToSearch;
        beforeEach(() => {
            stringArrayToSearch = ['this', 'is', 'the', 'test', 'array', '.'];
        });
        test('does contain', () => {
            const found = any(stringArrayToSearch, 'test');
            expect(found);
        });
        test('does not contain', () => {
            const notFound = any(stringArrayToSearch, 'not here');
            expect(!notFound);
        });
    });
    describe('function test', () => {
        let arrayToSearch;
        beforeEach(() => {
            arrayToSearch = [51, 49, 2, 6];
        });
        test('does contain', () => {
            const found = any(arrayToSearch, (x) => x === 49);
            expect(found);
        });
        test('does not contain', () => {
            const notFound = any(arrayToSearch, (x) => x === 0);
            expect(!notFound);
        });
    });
});
describe('any object', () => {
    let object = {
        x: 1,
        y: 9,
        a: 'string',
        b: 'something'
    };
    test('does contain number ', () => {
        const found = any(object, 9);
        const found2 = any(object, 1);
        expect(found);
        expect(found2);
    });
    test('does not contain number', () => {
        const notFound = any(object, 5);
        expect(!notFound);
    });
    test('does contain string', () => {
        const found = any(object, 'string');
        const found2 = any(object, 'something');
        expect(found);
        expect(found2);
    });
    test('does not contain string', () => {
        const notFound = any(object, 'not here');
        expect(!notFound);
    });
    test('does contain function', () => {
        const found = any(object, (x) => x === 1);
        expect(found);
    });
    test('does not contain function', () => {
        const notFound = any(object, (x) => x === 5);
        expect(!notFound);
    });
});

describe('throw error for non arrays and objects', () => {
    test('number', () => {
        try {
            any(4, 2);
        } catch (err) {
            expect(err).toBeTruthy();
        }
    });
    test('string', () => {
        try {
            any('hello', 'hi');
        } catch (err) {
            expect(err).toBeTruthy();
        }
    });
    test('date', () => {
        try {
            any(new Date(Date.now()), new Date(Date.now()));
        } catch (err) {
            expect(err).toBeTruthy();
        }
    });
    test('boolean', () => {
        try {
            any(true, 'hi');
        } catch (err) {
            expect(err).toBeTruthy();
        }
    });
});
