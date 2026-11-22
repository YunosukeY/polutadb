// jest.config.js
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // 既定の環境は Node。コンポーネントのテスト（*.test.tsx）は、ファイル先頭の
  // @jest-environment jsdom で jsdom に切り替える
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  testPathIgnorePatterns: [
    // Playwright のテスト（npm run e2e）
    '<rootDir>/e2e/',
    // 本番データの整合性チェック。CIでは別のジョブ（data）で npm run test:data を実行する
    '<rootDir>/src/data/data.test.ts',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
