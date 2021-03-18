import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import ResultTableProps from './ResultTableProps';
import Youtube from './Youtube';
import Star from './Star';
import Tweet from './Tweet';
import { getArtist, getSong } from '../../data/utils';

export default function SimpleResultTable(props: ResultTableProps) {
  const centering = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const fontsize = 28;
  return (
    <table>
      <tbody>
        {props.table.map((singing, i) => {
          return (
            <tr key={i}>
              <td style={{ padding: 0 }}>
                <Grid
                  container
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 0 }}
                >
                  <Grid item xs={12} sm={9} style={{ textAlign: 'center' }}>
                    <h6>
                      『{getSong(singing.songId)}』{getArtist(singing.songId)} <br />
                      {singing.withInst === false && <>アカペラ</>}
                      {singing.withInst === false && singing.full === false && <> </>}
                      {singing.full === false && <>ワンコーラス</>}
                    </h6>
                  </Grid>
                  <Grid item xs={12} sm={3} style={centering}>
                    <Youtube singing={singing} fontsize={fontsize} />
                    <Star
                      isFavo={props.isFavo(singing.id)}
                      onClick={() => props.toggleFavo(singing.id)}
                      fontsize={fontsize}
                    />
                    <Tweet singing={singing} fontsize={fontsize} />
                  </Grid>
                </Grid>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
