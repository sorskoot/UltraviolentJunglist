module.exports = {
  globals: {
    PATH: 'http://localhost:8080'
  },
  transform: {
    '^.+\\.svg$': '<rootDir>/private/jest/svgMock.js'
  },
  moduleNameMapper: {
    '^atoms(.*)$': '<rootDir>/src/components/atoms$1',
    '^molecules(.*)$': '<rootDir>/src/components/molecules$1',
    '^organism(.*)$': '<rootDir>/src/components/organism$1',
    '^templates(.*)$': '<rootDir>/src/components/templates$1',
    '^pages(.*)$': '<rootDir>/src/components/pages$1'
  },
  testMatch: [
    '**/src/**/*.test.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ]
}
