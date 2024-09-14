import type * as React from 'react';

import { Grid } from '@mui/material';
import type { Singing } from '../../../../data/types';
import ResultCard from './ResultCard';

type ResultCardsProps = {
  singings: Singing[];
};

const ResultCards: React.FC<ResultCardsProps> = ({ singings }) => {
  return (
    <Grid container>
      {singings.map((singing, i) => (
        <ResultCard singing={singing} key={i} />
      ))}
    </Grid>
  );
};

export default ResultCards;
