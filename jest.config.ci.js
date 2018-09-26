module.exports = Object.assign({}, require('./jest.config'), {
    reporters: [
        ['jest-junit', { output: 'reports/junit/js-test-results.xml' }],
        ['jest-silent-reporter', { useDots: true }],
    ],
});
