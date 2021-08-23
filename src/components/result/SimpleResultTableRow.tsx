import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Youtube from './Youtube';
import Star from './Star';
import Tweet from './Tweet';
import { Singing } from '../../data/interfaces';
import { getArtist, getSong } from '../../data/utils';
import { useIsFavo, useToggleFavo } from '../../lib/AppState';

export default function SimpleResultTableRow(props: { singing: Singing; i: number }) {
  const isFavo = useIsFavo();
  const toggleFavo = useToggleFavo();
  const centering = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const fontsize = 28;

  return (
    <TableRow key={props.i}>
      <TableCell style={{ padding: 0 }}>
        <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 0 }}>
          <Grid item xs={12} sm={9} style={{ textAlign: 'center' }}>
            <h6>
              『{getSong(props.singing.songId)}』{getArtist(props.singing.songId)} <br />
              {props.singing.withInst === 1 && <>アカペラ</>}
              {props.singing.withInst === 2 && <>演奏</>}
              {props.singing.withInst !== 0 && props.singing.full === false && <> </>}
              {props.singing.full === false && <>ワンコーラス</>}
            </h6>
          </Grid>
          <Grid item xs={12} sm={3} style={centering}>
            <Youtube singing={props.singing} fontsize={fontsize} />
            <Star isFavo={isFavo(props.singing.id)} onClick={() => toggleFavo(props.singing.id)} fontsize={fontsize} />
            <Tweet singing={props.singing} fontsize={fontsize} />
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
}
