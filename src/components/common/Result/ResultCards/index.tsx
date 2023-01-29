import * as React from 'react';

import { Singing } from '../../../../data/types';
import { Grid } from '@material-ui/core';
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
