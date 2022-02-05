import * as React from 'react';
import { useWindowSize } from 'react-use';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

import HR from '../layout/HR';
import { Pane } from '../../lib/style';
import { getVideo } from '../../data/utils';
import { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  icon: {
    fontSize: 28,
  },
});

const Releases = () => {
  const width = Math.min(useWindowSize().width - 20, 1000);

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item style={{ width }}>
        <LatestRelease />
      </Grid>
      <Grid item style={{ width }}>
        <OldReleases />
      </Grid>
    </Grid>
  );
};
export default Releases;

const LatestRelease = () => {
  return (
    <Pane>
      <h4>Latest Release Note</h4>
      <HR />
      <>
        <Date date='2022/02/05' />
        <AddData />
        <AddVideo videoId={92} />
        <AddVideo videoId={93} />
        <AddVideo videoId={94} />
        <AddVideo videoId={95} />
      </>
    </Pane>
  );
};

// eslint-disable-next-line max-lines-per-function
const OldReleases = () => {
  const classes = useStyles();

  const [isHidden, setIsHidden] = useState(true);
  const onClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <Pane>
      {isHidden && (
        <h4 onClick={onClick} style={{ marginBottom: 0 }}>
          Old Release Notes
          <ArrowDropDownIcon className={classes.icon} />
        </h4>
      )}
      {!isHidden && (
        <>
          <h4 onClick={onClick}>
            Old Release Notes
            <ArrowDropUpIcon className={classes.icon} />
          </h4>
          <HR />
          <>
            <Date date='2022/01/01' />
            <AddData />
            <AddVideo videoId={91} />
          </>
          <>
            <Date date='2021/12/25' />
            <AddData />
            <AddVideo videoId={88} />
            <AddVideo videoId={89} />
            <AddVideo videoId={90} />
          </>
          <>
            <Date date='2021/12/12' />
            <AddData />
            <AddVideo videoId={86} />
            <AddVideo videoId={87} />
          </>
          <>
            <Date date='2021/12/05' />
            <AddData />
            <AddVideo videoId={84} />
            <AddVideo videoId={85} />
          </>
          <>
            <Date date='2021/11/20' />
            <AddData />
            <AddVideo videoId={81} />
            <AddVideo videoId={82} />
            <AddVideo videoId={83} />
          </>
          <>
            <Date date='2021/11/06' />
            <AddData />
            <AddVideo videoId={80} />
          </>
          <>
            <Date date='2021/10/26' />
            <AddData />
            <AddVideo videoId={79} />
          </>
          <>
            <Date date='2021/10/11' />
            <AddData />
            <AddVideo videoId={77} />
            <AddVideo videoId={78} />
          </>
          <>
            <Date date='2021/10/04' />
            <AddData />
            <AddVideo videoId={75} />
            <AddVideo videoId={76} />
          </>
          <>
            <Date date='2021/09/22' />
            <AddData />
            <AddVideo videoId={72} />
            <AddVideo videoId={73} />
            <AddVideo videoId={74} />
          </>
          <>
            <Date date='2021/09/04' />
            <AddData />
            <AddVideo videoId={71} />
          </>
          <>
            <Date date='2021/09/02' />
            <AddData />
            <AddVideo videoId={70} />
            <AddVideo videoId={69} />
          </>
          <>
            <Date date='2021/08/28' />
            <AddData />
            <AddVideo videoId={68} />
          </>
          <>
            <Date date='2021/08/23' />
            <AddData />
            <AddVideo videoId={65} />
            <AddVideo videoId={66} />
            <AddVideo videoId={67} />
          </>
          <>
            <Date date='2021/08/16' />
            <AddData />
            <AddVideo videoId={58} />
            <AddVideo videoId={59} />
            <AddVideo videoId={60} />
            <AddVideo videoId={61} />
            <AddVideo videoId={62} />
            <AddVideo videoId={63} />
            <AddVideo videoId={64} />
          </>
          <>
            <Date date='2021/08/07' />
            <AddData />
            <AddVideo videoId={57} />
          </>
          <>
            <Date date='2021/08/02' />
            <AddData />
            <AddVideo videoId={56} />
          </>
          <>
            <Date date='2021/07/13' />
            <AddData />
            <AddVideo videoId={55} />
          </>
          <>
            <Date date='2021/07/03' />
            <AddData />
            <AddVideo videoId={54} />
          </>
          <>
            <Date date='2021/06/29' />
            <AddData />
            <AddVideo videoId={53} />
          </>
          <>
            <Date date='2021/06/25' />
            <AddData />
            <AddVideo videoId={52} />
          </>
          <>
            <Date date='2021/06/21' />
            <AddData />
            <AddVideo videoId={51} />
          </>
          <>
            <Date date='2021/06/16' />
            <AddData />
            <AddVideo videoId={50} />
          </>
          <>
            <Date date='2021/06/01' />
            <AddData />
            <AddVideo videoId={49} />
          </>
          <>
            <Date date='2021/05/23' />
            <AddData />
            <AddVideo videoId={48} />
          </>
          <>
            <Date date='2021/05/16' />
            <AddData />
            <AddVideo videoId={47} />
          </>
          <>
            <Date date='2021/05/13' />
            <AddData />
            <AddVideo videoId={46} />
          </>
          <>
            <Date date='2021/05/11' />
            <AddData />
            <AddVideo videoId={45} />
          </>
          <>
            <Date date='2021/04/28' />
            <AddData />
            <AddVideo videoId={43} />
            <AddVideo videoId={44} />
          </>
          <>
            <Date date='2021/04/13' />
            <AddData />
            <AddVideo videoId={42} />
          </>
          <>
            <Date date='2021/03/31' />
            <AddData />
            <AddVideo videoId={41} />
          </>
          <>
            <Date date='2021/03/25' />
            <AddData />
            <AddVideo videoId={40} />
          </>
          <>
            <Date date='2021/03/07' />
            <AddData />
            <AddVideo videoId={39} />
          </>
          <>
            <Date date='2021/03/01' />
            <AddData />
            <AddVideo videoId={38} />
            <AddFeature />
            <Content content='トップページのレイアウトを変更しました' />
          </>
          <>
            <Date date='2020/02/27' />
            <AddData />
            <AddVideo videoId={37} />
          </>
          <>
            <Date date='2020/02/22' />
            <AddData />
            <AddVideo videoId={36} />
          </>
          <>
            <Date date='2021/02/14' />
            <AddFeature />
            <Content content='ソート機能を追加しました' />
          </>
          <>
            <Date date='2020/02/11' />
            <AddData />
            <AddVideo videoId={35} />
          </>
          <>
            <Date date='2020/02/06' />
            <AddData />
            <AddVideo videoId={34} />
          </>
          <>
            <Date date='2020/01/30' />
            <AddData />
            <AddVideo videoId={32} />
            <AddVideo videoId={33} />
          </>
          <>
            <Date date='2020/01/15' />
            <AddData />
            <AddVideo videoId={31} />
          </>
          <>
            <Date date='2020/01/10' />
            <AddData />
            <AddVideo videoId={29} />
            <AddVideo videoId={30} />
            <ContentType type='細かい変更' />
            <Content content='枠タイプに3Dを追加しました' />
            <Content content='リンクに原曲プレイリスト（Spotify）を追加しました' />
          </>
          <>
            <Date date='2021/01/05' />
            <AddFeature />
            <Content content='簡易表示モードを追加しました' />
          </>
          <>
            <Date date='2021/01/04' />
            ・Puunyan様（<a href='https://twitter.com/Puunyannyan'>@Puunyannyan</a>
            ）のイラストを使わせていただけることになりました
          </>
          <>
            <Date date='2020/12/30' />
            <AddData />
            <AddVideo videoId={28} />
          </>
          <>
            <Date date='2020/12/26' />
            <AddData />
            <AddVideo videoId={27} />
          </>
          <>
            <Date date='2020/12/25' />
            <AddData />
            <AddVideo videoId={24} />
            <AddVideo videoId={25} />
            <AddVideo videoId={26} />
          </>
          <>
            <Date date='2020/12/20' />
            <AddFeature />
            <Content content='お気に入り機能を追加しました' />
            <Content content='ツイート機能を追加しました' />
          </>
          <>
            <Date date='2020/12/19' />
            <AddData />
            <AddVideo videoId={23} />
          </>
          <>
            <Date date='2020/12/13' />
            <AddData />
            <AddVideo videoId={21} />
            <AddVideo videoId={22} />
          </>
          <>
            <Date date='2020/11/29' />
            <AddData />
            <AddVideo videoId={20} />
          </>
          <>
            <Date date='2020/11/21' />
            <AddData />
            <AddVideo videoId={19} />
          </>
          <>
            <Date date='2020/11/14' />
            <AddData />
            <AddVideo videoId={18} />
            <AddVideo videoId={17} />
          </>
          <>
            <Date date='2020/11/09' />
            <AddData />
            <AddVideo videoId={16} />
            <AddFeature />
            <Content content='全文検索を追加しました' />
          </>
          <>
            <Date date='2020/11/08' />
            <AddFeature />
            <Content content='ページのルーティングに対応しました' />
          </>
          <>
            <Date date='2020/11/03' />
            <AddData />
            <AddVideo videoId={15} />
          </>
          <>
            <Date date='2020/10/31' />
            <AddData />
            <AddVideo videoId={13} />
            <AddVideo videoId={14} />
          </>
          <>
            <Date date='2020/10/28' />
            <AddData />
            <AddVideo videoId={12} />
            <AddFeature />
            <Content content='伴奏の有無、歌の長さでの検索を追加しました' />
            <Content content='アカペラかワンコーラスの場合には結果で補足を表示するようにしました' />
            <ContentType type='細かい変更' />
            <Content content='リリースノートページを追加しました' />
          </>
          <>
            <Date date='2020/10/27' />
            <ContentType type='細かい変更' />
            <Content content='『ももいろクローバー』と『ももいろクローバーZ』を区別するようにしました' />
          </>
          <>
            <Date date='2020/10/24' />
            <ContentType type='細かい変更' />
            <Content content='統計情報ページを追加しました' />
          </>
          <>
            <Date date='2020/10/23' />
            <AddData />
            <AddVideo videoId={11} />
            <ContentType type='細かい変更' />
            <Content content='『桜高軽音部』と『放課後ティータイム』を区別するようにしました' />
          </>
          <>
            <Date date='2020/10/21' />
            <Content content='本サイトを公開しました' />
          </>
        </>
      )}
    </Pane>
  );
};

function Date(props: { date: string }) {
  return <h5 style={{ marginTop: '30px' }}>{props.date}</h5>;
}

function AddData() {
  return <ContentType type='データの追加' />;
}

function AddFeature() {
  return <ContentType type='機能の追加' />;
}

function AddVideo(props: { videoId: number }) {
  return <Content content={`『${getVideo(props.videoId)}』分を追加しました`} />;
}

function ContentType(props: { type: string }) {
  return <h6 style={{ marginTop: '30px' }}>{props.type}</h6>;
}

function Content(props: { content: string }) {
  return (
    <>
      ・{props.content}
      <br />
    </>
  );
}
