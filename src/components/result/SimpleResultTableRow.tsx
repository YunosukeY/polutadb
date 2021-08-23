import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Youtube from './Youtube';
import Star from './Star';
import { Singing } from '../../data/interfaces';
import { getArtist, getSong } from '../../data/utils';
import { useIsFavo, useToggleFavo } from '../../lib/AppState';
import ShareModal from '../share/ShareModal';

export default function SimpleResultTableRow(props: { singing: Singing }) {
  const isFavo = useIsFavo();
  const toggleFavo = useToggleFavo();
  const centering = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const fontsize = 28;

  return (
    <Grid container style={{ ...centering, paddingBottom: 0 }}>
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
        <ShareModal singing={props.singing} fontsize={fontsize} />
      </Grid>
    </Grid>
  );
}
