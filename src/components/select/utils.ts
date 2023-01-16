import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { appState } from '../../lib/AppState';

import { Query } from '../../lib/query';

export type EachSelectProps = { query: Query };

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      padding: theme.spacing(1),
      width: '100%',
      height: '5rem',
    },
  }),
);

export const useOnChange = (onChange: (...e: any[]) => void, qUpdater: (q: Query, value: any) => void) => {
  const router = useRouter();
  const query = new Query(router.query);
  const setState = useSetRecoilState(appState);
  const initPage = () => {
    setState((state) => ({ ...state, pagenum: 1 }));
  };
  return (value: any) => {
    onChange(value);
    qUpdater(query, value);
    initPage();
    router.push(`/?${query}`, undefined, { scroll: false });
  };
};
