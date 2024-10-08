import { type Theme, useMediaQuery, useTheme } from '@mui/material';
import type { Breakpoint } from '@mui/material/styles';

type BreakpointOrNull = Breakpoint | null;

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
export function useWidth() {
  const theme: Theme = useTheme();
  const keys: Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

// see ResultCard
export const useDisplayNum = () => {
  const width = useWidth();

  if (width === 'xs' || width === 'sm') return 10;
  if (width === 'md' || width === 'lg') return 20;
  return 30;
};
