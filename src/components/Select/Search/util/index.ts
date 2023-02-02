import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import { Query } from '../../../../lib/query';
import { initPage } from '../../../../store/selector';

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

export const useOnChange = (onChange: (...e: any[]) => void, qUpdater: (q: Query, value: any) => void) => {
  const router = useRouter();
  const query = new Query(router.query);
  const init = useSetRecoilState(initPage);
  return (value: any) => {
    onChange(value);
    qUpdater(query, value);
    init();
    router.push(`/?${query}`, undefined, { scroll: false });
  };
};
