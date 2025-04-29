import FormControl from '@mui/material/FormControl';
import type { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useSetAtom } from 'jotai/react';
import { useRouter } from 'next/router';

import { Query } from '../../../../lib/query';
import { initPageAtom } from '../../../../store/pageAtom';

export type EachSelectProps = { query: Query };

export const StyledFormControl = styled(FormControl)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(1),
  width: '100%',
  height: '3rem',
}));

export const useOnChange = <T>(onChange: (v: T) => void, qUpdater: (q: Query, value: T) => void) => {
  const router = useRouter();
  const query = new Query(router.query);
  const init = useSetAtom(initPageAtom);
  return (value: T) => {
    onChange(value);
    qUpdater(query, value);
    init();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(`/?${query.toString()}`, undefined, { scroll: false });
  };
};
