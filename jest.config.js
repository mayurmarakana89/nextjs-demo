module.exports = {
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleNameMapper: {
        '\\.(css)$': '<rootDir>/tests/__mocks__/styleMock.js',
    }
};