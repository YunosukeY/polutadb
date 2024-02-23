import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import { Query } from '../../../../lib/query';
import { initPageSelector } from '../../../../store/pageAtom';

export type EachSelectProps = { query: Query };

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      padding: theme.spacing(1),
      width: '100%',
      height: '3rem',
    },
  }),
);

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
