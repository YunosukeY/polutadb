import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

const WhiteH5 = styled('div')({
  color: 'white',
});
const WhiteA = styled('a')({
  color: 'white',
});

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ef5350' }}>
      <Grid container justify='center'>
        <Grid item xs={10} sm={10} md={10} lg={9}>
          <div style={{ padding: '20pt 0', textAlign: 'right' }}>
            <WhiteH5>Links</WhiteH5>
            <WhiteA href='https://open.spotify.com/playlist/4RUXo3tSPwkhizu8yBCgfn'>原曲プレイリスト（Spotify）</WhiteA>
            <br />
            <WhiteA href='https://twitter.com/k1m1tsu'>管理人Twitter</WhiteA>
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
