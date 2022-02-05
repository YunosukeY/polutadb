import * as React from 'react';

import { Singing } from '../../data/interfaces';
import { Grid } from '@material-ui/core';
import ResultCard from './ResultCard';

type ResultCardsProps = {
  singings: Singing[];
};

const ResultCards: React.FC<ResultCardsProps> = ({ singings }) => {
  return (
    <Grid container spacing={5} style={{ flexShrink: 1 }}>
      {singings.map((singing, i) => (
        <ResultCard singing={singing} key={i} />
      ))}
    </Grid>
  );
};

export default ResultCards;
