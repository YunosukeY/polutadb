import * as React from 'react';

export default function Releases() {
  return (
    <div className='pane' id='releases'>
      <h4>Release Notes</h4>
      <Date date='2020/12/20' />
      <ContentType type='機能の追加' />
      <Content content='お気に入り機能を追加しました' />
      <Content content='ツイート機能を追加しました' />

      <Date date='2020/12/19' />
      <ContentType type='データの追加' />
      <Content content='『いつものカラオケ #気圧敗北部【尾丸ポルカ/ホロライブ】』分を追加しました' />

      <Date date='2020/12/13' />
      <ContentType type='データの追加' />
      <Content content='『アカペラで 狂乱戦記～日常ノ神サマ～【尾丸ポルカ/ホロライブ】』分を追加しました' />
      <Content content='『歌で銀河が救えるわけないでしょ【尾丸ポルカ/ホロライブ】』分を追加しました' />

      <Date date='2020/11/29' />
      <ContentType type='データの追加' />
      <Content content='『POLKA≡November≡LIVE≡2020 #ぽるうた【尾丸ポルカ/ホロライブ】』分を追加しました' />

      <Date date='2020/11/21' />
      <ContentType type='データの追加' />
      <Content content='『楽しみすぎて穏やかじゃない【ホロライブ/尾丸ポルカ】』分を追加しました' />

      <Date date='2020/11/14' />
      <ContentType type='データの追加' />
      <Content content='『戯画「ガラス姫と鏡の従者」オープニングムービー』分を追加しました' />
      <Content content='『寝具 a song【尾丸ポルカ/ホロライブ】』分を追加しました' />

      <Date date='2020/11/09' />
      <ContentType type='データの追加' />
      <Content content='『30万人に聞かせるリクエストボイス【ホロライブ/尾丸ポルカ】』分を追加しました' />
      <ContentType type='機能の追加' />
      <Content content='全文検索を追加しました' />

      <Date date='2020/11/08' />
      <ContentType type='機能の追加' />
      <Content content='ページのルーティングに対応しました' />

      <Date date='2020/11/03' />
      <ContentType type='データの追加' />
      <Content content='『ポルカが気圧を倒す時に始まる歌枠【ホロライブ/尾丸ポルカ】』分を追加しました' />

      <Date date='2020/10/31' />
      <ContentType type='データの追加' />
      <Content content='『POLKA◆October◆LIVE◆2020 #ぽるうた 【ホロライブ/尾丸ポルカ】』分を追加しました' />
      <Content content='『【ホロライブ】さぷらいずぱらだいす！【どっきりラビリンス】』分を追加しました' />

      <Date date='2020/10/28' />
      <ContentType type='データの追加' />
      <Content content='『酔いどれポルカのアイカツ！語り～アカペラもあるｙｐ～【ホロライブ/尾丸ポルカ】』分を追加しました' />
      <ContentType type='機能の追加' />
      <Content content='伴奏の有無、歌の長さでの検索を追加しました' />
      <Content content='アカペラかワンコーラスの場合には結果で補足を表示するようにしました' />
      <ContentType type='細かい変更' />
      <Content content='リリースノートページを追加しました' />

      <Date date='2020/10/27' />
      <ContentType type='細かい変更' />
      <Content content='『ももいろクローバー』と『ももいろクローバーZ』を区別するようにしました' />

      <Date date='2020/10/24' />
      <ContentType type='細かい変更' />
      <Content content='統計情報ページを追加しました' />

      <Date date='2020/10/23' />
      <ContentType type='データの追加' />
      <Content content='『ポルカじゃない人の朝歌ゲリラ【ホロライブ/尾丸ポルカ】』分を追加しました' />
      <ContentType type='細かい変更' />
      <Content content='『桜高軽音部』と『放課後ティータイム』を区別するようにしました' />

      <Date date='2020/10/21' />
      <Content content='本サイトを公開しました' />
    </div>
  );
}

function Date(props: { date: string }) {
  return (<h5 className='release-date'>{props.date}</h5>);
}

function ContentType(props: { type: string }) {
  return (<h6 className='release-content-type'>{props.type}</h6>);
}

function Content(props: { content: string }) {
  return (
    <>
      ・{props.content}<br />
    </>
  );
}