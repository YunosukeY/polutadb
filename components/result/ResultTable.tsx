import * as React from 'react';

import ResultTableProps from './ResultTableProps';
import Star from './Star';
import Tweet from './Tweet';
import { getUrl, getArtist, getSong, getVideo } from '../../data/utils';

export default function ResultTable(props: ResultTableProps) {
  const fontsize = 24;
  return (
    <table>
      <tbody>
        {props.table.map((singing, i) => (
          <tr key={i}>
            <td>
              <div className='row'>
                <div className='col s12 m12 l8 xl8' id='iframe-content'>
                  <div style={{ borderRadius: 10, margin: 'auto', overflow: 'hidden' }} id='iframe-wrapper'>
                    <iframe
                      id='usual-iframe'
                      width='480'
                      height='270'
                      src={`https://www.youtube-nocookie.com/embed/${getUrl(singing.videoId)}?start=${singing.start}`}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      title={getVideo(singing.videoId)}
                    />
                  </div>
                </div>
                <div className='col s12 m12 l4 xl4' id='result-table'>
                  <h5 id='song-info'>
                    『{getSong(singing.songId)}』<br />
                    {getArtist(singing.songId)} <br />
                    {singing.withInst === false && <div className='supplemental-info'>アカペラ</div>}
                    {singing.full === false && <div className='supplemental-info'>ワンコーラス</div>}
                    <Star
                      isFavo={props.isFavo(singing.id)}
                      onClick={() => props.toggleFavo(singing.id)}
                      fontsize={fontsize}
                    />
                    <Tweet singing={singing} fontsize={fontsize} />
                  </h5>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}