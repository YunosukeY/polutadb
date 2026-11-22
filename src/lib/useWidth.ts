import { type Theme, useMediaQuery, useTheme } from '@mui/material';
import type { Breakpoint } from '@mui/material/styles';

/**
 * 現在の画面幅に対応するブレークポイントを返す。
 * フックをトップレベルで呼ぶため、MUI 既定の5つのブレークポイントを前提にしている。
 */
export function useWidth(): Breakpoint {
  const theme: Theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  if (xl) return 'xl';
  if (lg) return 'lg';
  if (md) return 'md';
  if (sm) return 'sm';
  return 'xs';
}

// see ResultCard
export const useDisplayNum = () => {
  const width = useWidth();

  if (width === 'xs' || width === 'sm') return 10;
  if (width === 'md' || width === 'lg') return 20;
  return 30;
};
