import * as React from 'react';
import { useWindowSize } from 'react-use';

import { Grid, Typography } from '@mui/material';
import HR from '../common/HR';
import Pane from '../common/Pane';

export default function About() {
  const width = Math.min(useWindowSize().width - 20, 1000);

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item style={{ width }}>
        <Pane>
          <Typography variant='h4'>About</Typography>
          <HR />
          <Describe />
        </Pane>
      </Grid>
    </Grid>
  );
}

function Describe() {
  return (
    <div style={{ fontSize: '16px' }}>
      <Typography variant='body1'>
        PolutaDB（ぽるうたデータベース）では、ホロライブ所属の VTuber 尾丸ポルカさんの歌を検索することができます。
      </Typography>
      <br />
      <Typography variant='body1'>尾丸ポルカさんについてはこちら！</Typography>
      <Typography variant='body1'>
        YouTube：<a href='https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA'>Polka Ch. 尾丸ポルカ</a>
      </Typography>
      <Typography variant='body1'>
        Twitter：<a href='https://twitter.com/omarupolka'>尾丸ポルカ</a>
      </Typography>
      <br />
      <Typography variant='body1'>また本サイトは座員の皆様のご協力によって成り立っています。</Typography>
      <Typography variant='body1'>更新に協力してくれている皆様</Typography>
      <Typography variant='body1'>
        ・mohiさん（<a href='https://twitter.com/holoholopolka'>@holoholopolka</a>）
      </Typography>
      <Typography variant='body1'>
        ・ファクトさん（<a href='https://twitter.com/FactMoonStar'>@FactMoonStar</a>）
      </Typography>
      <br />
      <Typography variant='body1'>諸注意</Typography>
      <Typography variant='body1'>
        ・お気に入り情報はブラウザに保存されるため、キャッシュクリアにご注意ください。
      </Typography>
      <Typography variant='body1'>
        ・本サイトは有志による非公式サイトです。不具合、ご要望は<a href='https://twitter.com/k1m1tsu'>管理人Twitter</a>
        までご連絡ください。
      </Typography>
    </div>
  );
}
