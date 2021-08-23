import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

import Star from './Star';
import { getUrl, getArtist, getSong, getVideo } from '../../data/utils';
import { Singing } from '../../data/interfaces';
import { useIsFavo, useToggleFavo } from '../../lib/AppState';
import ShareModal from '../share/ShareModal';

const SupplementalInfo = styled('div')({
  fontSize: '15px',
  marginBottom: '-5px',
});

// TODO: SimpleResultTableRowとの共通化
export default function ResultTableRow(props: { singing: Singing }) {
  const isFavo = useIsFavo();
  const toggleFavo = useToggleFavo();

  const fontsize = 24;
  const centering = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={8} lg={8} id='iframe-content' style={{ textAlign: 'center' }}>
        <div style={{ borderRadius: 5, margin: 'auto', overflow: 'hidden' }} id='iframe-wrapper'>
          <iframe
            id='usual-iframe'
            width='480'
            height='270'
            src={`https://www.youtube-nocookie.com/embed/${getUrl(props.singing.videoId)}?start=${props.singing.start}`}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title={getVideo(props.singing.videoId)}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} id='result-table' style={centering}>
        <Grid container style={centering}>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <h5>
              『{getSong(props.singing.songId)}』<br />
              {getArtist(props.singing.songId)} <br />
              {props.singing.withInst === 1 && <SupplementalInfo>アカペラ</SupplementalInfo>}
              {props.singing.withInst === 2 && <SupplementalInfo>演奏</SupplementalInfo>}
              {props.singing.full === false && <SupplementalInfo>ワンコーラス</SupplementalInfo>}
            </h5>
          </Grid>
          <Grid item xs={12} style={centering}>
            <Star isFavo={isFavo(props.singing.id)} onClick={() => toggleFavo(props.singing.id)} fontsize={fontsize} />
            <ShareModal singing={props.singing} fontsize={fontsize} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
