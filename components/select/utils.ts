import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { Query } from '../../lib/Query';

export type EachSelectProps = { query: Query; setLocationSearch: (newQuery: Query) => void };

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      padding: theme.spacing(1),
      width: '100%',
      height: '5rem',
    },
  }),
);
