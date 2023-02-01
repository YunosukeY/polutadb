import * as React from 'react';
import Grid from '@mui/material/Grid';

import Star from './Star';
import { useGetArtist, useVideoId } from '../../../../../data/utils';
import { Singing } from '../../../../../data/types';
import ShareButtons from './ShareButtons';
import { Card, CardActions, CardContent, Chip, Typography } from '@mui/material';
import Thumbnail from '../../../Thumbnail';
import { useIsFavo, useToggleFavo } from '../../../../../store/hooks';

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
        <Thumbnail id={videoId} singing={singing} />
        <CardContent style={{ paddingBottom: 0 }}>
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            style={{ minHeight: 120, maxHeight: 160 }}
          >
            <Grid item>
              <Typography variant='h5' style={{ textAlign: 'center', margin: 0 }}>
                『{singing.song}』<br />
                {artist} <br />
              </Typography>
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
          <ShareButtons singing={singing} fontsize={fontsize} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ResultCard;
