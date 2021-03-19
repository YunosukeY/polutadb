import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Star from './Star';
import Tweet from './Tweet';
import { getUrl, getArtist, getSong, getVideo } from '../../data/utils';
import { Singing } from '../../data/interfaces';
import { useAppState, useSetAppState, getAppStateUtils } from '../../lib/AppState';

export default function ResultTableRow(props: { singing: Singing; i: number }) {
  const [isFavo, toggleFavo] = getAppStateUtils(useAppState(), useSetAppState());

  const fontsize = 24;

  return (
    <TableRow key={props.i}>
      <TableCell>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} id='iframe-content'>
            <div style={{ borderRadius: 10, margin: 'auto', overflow: 'hidden' }} id='iframe-wrapper'>
              <iframe
                id='usual-iframe'
                width='480'
                height='270'
                src={`https://www.youtube-nocookie.com/embed/${getUrl(props.singing.videoId)}?start=${
                  props.singing.start
                }`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title={getVideo(props.singing.videoId)}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} id='result-table'>
            <h5 id='song-info'>
              『{getSong(props.singing.songId)}』<br />
              {getArtist(props.singing.songId)} <br />
              {props.singing.withInst === false && <div className='supplemental-info'>アカペラ</div>}
              {props.singing.full === false && <div className='supplemental-info'>ワンコーラス</div>}
              <Star
                isFavo={isFavo(props.singing.id)}
                onClick={() => toggleFavo(props.singing.id)}
                fontsize={fontsize}
              />
              <Tweet singing={props.singing} fontsize={fontsize} />
            </h5>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
}