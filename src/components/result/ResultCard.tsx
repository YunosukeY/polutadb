import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

import Star from './Star';
import { getArtist, getSong, getVideoId } from '../../data/utils';
import { Singing } from '../../data/interfaces';
import { useIsFavo, useToggleFavo } from '../../lib/AppState';
import ShareModal from '../share/ShareModal';
import { Card, CardActions, CardContent } from '@material-ui/core';
import PickUpThumbnail from '../layout/PickUpThumbnail';

const SupplementalInfo = styled('div')({
  fontSize: '15px',
  marginBottom: '-5px',
});

type ResultCardProps = {
  singing: Singing;
};

const ResultCard: React.FC<ResultCardProps> = ({ singing }) => {
  const isFavo = useIsFavo();
  const toggleFavo = useToggleFavo();

  const fontsize = 32;

  return (
    <Grid item xs={12} md={6} xl={4}>
      <Card>
        <PickUpThumbnail id={getVideoId(singing.videoId)} singing={singing} />
        <CardContent style={{ paddingBottom: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', height: 120 }}>
            <h5 style={{ textAlign: 'center', margin: 0 }}>
              『{getSong(singing.songId)}』<br />
              {getArtist(singing.songId)} <br />
              {singing.withInst === 1 && <SupplementalInfo>アカペラ</SupplementalInfo>}
              {singing.withInst === 2 && <SupplementalInfo>演奏</SupplementalInfo>}
              {singing.full === false && <SupplementalInfo>ワンコーラス</SupplementalInfo>}
            </h5>
          </div>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Star isFavo={isFavo(singing.id)} onClick={() => toggleFavo(singing.id)} fontsize={fontsize} />
          <ShareModal singing={singing} fontsize={fontsize} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ResultCard;
