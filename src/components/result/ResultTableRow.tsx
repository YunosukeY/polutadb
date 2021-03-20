import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components';

import Star from './Star';
import Tweet from './Tweet';
import { getUrl, getArtist, getSong, getVideo } from '../../data/utils';
import { Singing } from '../../data/interfaces';
import { useAppState, useSetAppState, getAppStateUtils } from '../../lib/AppState';

const SupplementalInfo = styled.div`
  font-size: 15px;
  margin-bottom: -5px;
`;

export default function ResultTableRow(props: { singing: Singing; i: number }) {
  const [isFavo, toggleFavo] = getAppStateUtils(useAppState(), useSetAppState());

  const fontsize = 24;

  return (
    <TableRow key={props.i}>
      <TableCell>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} id='iframe-content' style={{ textAlign: 'center' }}>
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
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            id='result-table'
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <h5 id='song-info' style={{ textAlign: 'center' }}>
              『{getSong(props.singing.songId)}』<br />
              {getArtist(props.singing.songId)} <br />
              {props.singing.withInst === false && <SupplementalInfo>アカペラ</SupplementalInfo>}
              {props.singing.full === false && <SupplementalInfo>ワンコーラス</SupplementalInfo>}
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
