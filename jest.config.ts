import path from 'path';

import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config = {
  // Specifies how modules are resolved during tests
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy', // Maps CSS files for simulating modules in tests
    '^~/(.*)$': path.join(__dirname, 'src', '$1'), // Maps custom paths to actual directories
  },
  // Specifies a predefined set of configurations for Jest.
  preset: 'ts-jest',

  // Defines how TypeScript files should be transformed to JavaScript
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Add setup file
  setupFilesAfterEnv: ['@testing-library/jest-dom'],

  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
};

export default createJestConfig(config);
