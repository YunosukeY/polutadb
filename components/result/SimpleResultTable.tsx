import * as React from 'react';

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
              <td style={{ paddingTop: 0 }}>
                <div
                  className='row'
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 0 }}
                >
                  <div className='col s12 m9' style={{ textAlign: 'center' }}>
                    <h6>
                      『{getSong(singing.songId)}』{getArtist(singing.songId)} <br />
                      {singing.withInst === false && <>アカペラ</>}
                      {singing.withInst === false && singing.full === false && <> </>}
                      {singing.full === false && <>ワンコーラス</>}
                    </h6>
                  </div>
                  <div className='col s12 m3' style={centering}>
                    <Youtube singing={singing} fontsize={fontsize} />
                    <Star
                      isFavo={props.isFavo(singing.id)}
                      onClick={() => props.toggleFavo(singing.id)}
                      fontsize={fontsize}
                    />
                    <Tweet singing={singing} fontsize={fontsize} />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
