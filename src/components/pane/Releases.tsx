import * as React from 'react';

import { getVideo } from '../../data/utils';

// eslint-disable-next-line max-lines-per-function
export default function Releases() {
  return (
    <div className='pane' id='releases'>
      <h4>Release Notes</h4>
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
    </div>
  );
}

function Date(props: { date: string }) {
  return <h5 className='release-date'>{props.date}</h5>;
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
  return <h6 className='release-content-type'>{props.type}</h6>;
}

function Content(props: { content: string }) {
  return (
    <>
      ・{props.content}
      <br />
    </>
  );
}