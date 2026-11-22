import Grid from '@mui/material/Grid';
import type * as React from 'react';

import { Card, CardActions, CardContent, Chip, Stack, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import type { Singing } from '../../../../../data/types';
import { useGetArtist, useVideoId } from '../../../../../data/utils';
import { favoAtomFamily } from '../../../../../store/favoAtom';
import Thumbnail from '../../../Thumbnail';
import ShareButtons from './ShareButtons';
import Star from './Star';

type ResultCardProps = {
  singing: Singing;
};

const ResultCard: React.FC<ResultCardProps> = ({ singing }) => {
  const [isFavo, setFavo] = useAtom(favoAtomFamily(singing.id));

  const fontsize = 32;

  const videoId = useVideoId(singing.video);
  const getArtist = useGetArtist();
  const artist = getArtist(singing.song);
  if (videoId === undefined) return null;

  return (
    <Grid size={{ xs: 12, md: 6, xl: 4 }} style={{ padding: 20 }}>
      <Card>
        <Thumbnail id={videoId} singing={singing} />
        <CardContent style={{ paddingBottom: 0 }}>
          <Stack
            sx={{ flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
            style={{ minHeight: 120, maxHeight: 160 }}
          >
            <div>
              <Typography variant='h5' style={{ textAlign: 'center', margin: 0 }}>
                『{singing.song}』
              </Typography>
              <Typography variant='h5' style={{ textAlign: 'center', margin: 0 }}>
                {artist}
              </Typography>
            </div>
            {singing.time == 1 && (
              <div>
                <Chip label='First Time!' variant='outlined' />
              </div>
            )}
          </Stack>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Star
            singing={singing}
            isFavo={isFavo}
            onClick={() => {
              setFavo(!isFavo);
            }}
            fontsize={fontsize}
          />
          <ShareButtons singing={singing} fontsize={fontsize} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ResultCard;
