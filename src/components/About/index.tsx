import * as React from 'react';
import { useWindowSize } from 'react-use';

import HR from '../common/HR';
import { Grid } from '@mui/material';
import Pane from '../common/Pane';

export default function About() {
  const width = Math.min(useWindowSize().width - 20, 1000);

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item style={{ width }}>
        <Pane>
          <h4>About</h4>
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
      PolutaDB（ぽるうたデータベース）では、ホロライブ所属の VTuber 尾丸ポルカさんの歌を検索することができます。
      <br />
      <br />
      尾丸ポルカさんについてはこちら！
      <br />
      YouTube：<a href='https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA'>Polka Ch. 尾丸ポルカ</a>
      <br />
      Twitter：<a href='https://twitter.com/omarupolka'>尾丸ポルカ</a>
      <br />
      <br />
      また本サイトは座員の皆様のご協力によって成り立っています。
      <br />
      更新に協力してくれている皆様
      <br />
      ・mohiさん（<a href='https://twitter.com/holoholopolka'>@holoholopolka</a>）
      <br />
      ・ファクトさん（<a href='https://twitter.com/FactMoonStar'>@FactMoonStar</a>）
      <br />
      <br />
      諸注意
      <br />
      ・お気に入り情報はブラウザに保存されるため、キャッシュクリアにご注意ください。
      <br />
      ・本サイトは有志による非公式サイトです。不具合、ご要望は<a href='https://twitter.com/k1m1tsu'>管理人Twitter</a>
      までご連絡ください。
      <br />
    </div>
  );
}
