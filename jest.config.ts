// jest.config.js
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    // Playwright のテスト（yarn e2e）
    '<rootDir>/e2e/',
    // 本番データの整合性チェック。CIでは別のジョブ（data）で yarn test:data を実行する
    '<rootDir>/src/data/data.test.ts',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
