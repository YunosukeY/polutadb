// 全テストファイルの前に実行される（jest.config.ts の setupFilesAfterEnv）
import '@testing-library/jest-dom';

// next/router は Next.js のアプリの外では動かないので、URLを保持するだけのモックに差し替える
jest.mock('next/router', () => {
  const { useRouter } = jest.requireActual<typeof import('./router')>('./router');
  return { useRouter };
});
