import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Star from './Star';
import { useGetArtist, useVideoId } from '../../data/utils';
import { Singing } from '../../data/interfaces';
import { useIsFavo, useToggleFavo } from '../../lib/AppState';
import ShareModal from '../share/ShareModal';
import { Card, CardActions, CardContent, Chip } from '@material-ui/core';
import PickUpThumbnail from '../layout/PickUpThumbnail';

type ResultCardProps = {
  singing: Singing;
};

const ResultCard: React.FC<ResultCardProps> = ({ singing }) => {
  const isFavo = useIsFavo();
  const toggleFavo = useToggleFavo();

  const fontsize = 32;

  const videoId = useVideoId(singing.video);
  const getArtist = useGetArtist();
  const artist = getArtist(singing.song);
  if (videoId === undefined) return null;

  return (
    <Grid item xs={12} md={6} xl={4} style={{ padding: 20 }}>
      <Card>
        <PickUpThumbnail id={videoId} singing={singing} />
        <CardContent style={{ paddingBottom: 0 }}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            style={{ minHeight: 120, maxHeight: 160 }}
          >
            <Grid item>
              <h5 style={{ textAlign: 'center', margin: 0 }}>
                『{singing.song}』<br />
                {artist} <br />
              </h5>
            </Grid>
            {singing.time == 1 && (
              <Grid item>
                <Chip color='primary' label='First Time!' />
              </Grid>
            )}
          </Grid>
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
