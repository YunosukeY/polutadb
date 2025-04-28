import type { Theme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import FormControl from '@mui/material/FormControl';

import { Query } from '../../../../lib/query';
import { initPageSelector } from '../../../../store/pageAtom';

export type EachSelectProps = { query: Query };

export const StyledFormControl = styled(FormControl)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(1),
  width: '100%',
  height: '3rem',
}));

export const useOnChange = <T>(onChange: (v: T) => void, qUpdater: (q: Query, value: T) => void) => {
  const router = useRouter();
  const query = new Query(router.query);
  const init = useSetRecoilState(initPageSelector);
  return (value: T) => {
    onChange(value);
    qUpdater(query, value);
    init();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push(`/?${query.toString()}`, undefined, { scroll: false });
  };
};
