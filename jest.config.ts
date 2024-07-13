/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.png$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/Components(.*)$': '<rootDir>/src/Components$1',
    '^@/utils(.*)$': '<rootDir>/src/utils$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

export default config;
