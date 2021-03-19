import * as React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Footer() {
  return (
    <footer className='page-footer'>
      <Grid container justify='center'>
        <Grid item xs={10} sm={10} md={10} lg={9}>
          <div id='links' style={{ paddingBottom: 20 }}>
            <h5 style={{ color: 'white' }}>Links</h5>
            <a href='https://open.spotify.com/playlist/4RUXo3tSPwkhizu8yBCgfn' style={{ color: 'white' }}>
              原曲プレイリスト（Spotify）
            </a>
            <br />
            <a href='https://twitter.com/k1m1tsu' style={{ color: 'white' }}>
              管理人Twitter
            </a>
          </div>
        </Grid>
      </Grid>
      <div style={{ backgroundColor: 'rgba(51,51,51,.08)', display: 'table', width: '100%' }}>
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            height: '50px',
            display: 'table-cell',
            verticalAlign: 'middle',
          }}
        >
          © 2020 ぽるうたデータベース
        </div>
      </div>
    </footer>
  );
}
