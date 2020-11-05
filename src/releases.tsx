import * as React from 'react';

export function Releases() {
  return (
    <div className='pane'>
      <h4>Release Notes</h4>
      重要度の低い情報は「細かい変更」にあります．<br />

      <h5 className='release-date'>2020/11/3</h5>
      <h6 className='release-content'>データの追加</h6>
      ・『ポルカが気圧を倒す時に始まる歌枠【ホロライブ/尾丸ポルカ】』分を追加しました<br />

      <h5 className='release-date'>2020/10/31</h5>
      <h6 className='release-content'>データの追加</h6>
      ・『POLKA◆October◆LIVE◆2020 #ぽるうた 【ホロライブ/尾丸ポルカ】』分を追加しました<br />
      ・『【ホロライブ】さぷらいずぱらだいす！【どっきりラビリンス】』分を追加しました<br />

      <h5 className='release-date'>2020/10/28</h5>
      <h6 className='release-content'>データの追加</h6>
      ・『酔いどれポルカのアイカツ！語り～アカペラもあるｙｐ～【ホロライブ/尾丸ポルカ】』分を追加しました<br />
      <h6 className='release-content'>機能の追加</h6>
      ・伴奏の有無、歌の長さでの検索を追加しました<br />
      ・アカペラかワンコーラスの場合には結果で補足を表示するようにしました<br />
      <h6 className='release-content'>細かい変更</h6>
      ・リリースノートページを追加しました<br />

      <h5 className='release-date'>2020/10/27</h5>
      <h6 className='release-content'>細かい変更</h6>
      ・『ももいろクローバー』と『ももいろクローバーZ』を区別するようにしました<br />

      <h5 className='release-date'>2020/10/24</h5>
      <h6 className='release-content'>細かい変更</h6>
      ・統計情報ページを追加しました<br />

      <h5 className='release-date'>2020/10/23</h5>
      <h6 className='release-content'>データの追加</h6>
      ・『ポルカじゃない人の朝歌ゲリラ【ホロライブ/尾丸ポルカ】』分を追加しました<br />
      <h6 className='release-content'>細かい変更</h6>
      ・『桜高軽音部』と『放課後ティータイム』を区別するようにしました<br />

      <h5 className='release-date'>2020/10/21</h5>
      ・本サイトを公開しました<br />
    </div>
  );
}
