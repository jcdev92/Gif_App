module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    "bail": 1,
    "verbose": true,
    transform : {
    '^.+\\.jsx?$': 'babel-jest',
    }
};