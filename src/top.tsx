import * as React from 'react';
import { useState } from 'react';
import { Select } from './select';
import { Result } from './result';

export function Top() {
  const [genre, setGenre] = useState(-1);
  const [type, setType] = useState(-1);
  const [video, setVideo] = useState(-1);
  const [song, setSong] = useState(-1);
  const [artist, setArtist] = useState(-1);
  const [displaynum, setDisplaynum] = useState(5);
  const [hasResult, setHasResult] = useState(false); // 上記の値からは分からない
  const [pagenum, setPagenum] = useState(1);

  // setterにhasResult, pageを更新する副作用を追加
  function updateHasRes(setter: React.Dispatch<React.SetStateAction<number>>) {
    return ((id: number) => {
      setter(id);
      setHasResult(true);
      setPagenum(1);
    });
  }

  // 表示件数が更新されたら1ページ目に戻す
  function onDnumChange(newDnum: number) {
    setDisplaynum(newDnum);
    setPagenum(1);
  }

  return (
    <>
      <About />
      <Select
        genre={genre} setGenre={updateHasRes(setGenre)}
        type={type} setType={updateHasRes(setType)}
        video={video} setVideo={updateHasRes(setVideo)}
        song={song} setSong={updateHasRes(setSong)}
        artist={artist} setArtist={updateHasRes(setArtist)}
        displaynum={displaynum} setDisplaynum={onDnumChange}
      />
      {hasResult && <Result genre={genre} type={type} video={video} song={song} artist={artist} displaynum={displaynum} pagenum={pagenum} setPagenum={setPagenum} />}
    </>
  );
}

function About() {
  return (
    <div className='block description-block'>
      <h4>About</h4>
        PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber 尾丸ポルカさんの歌（通称：ぽるうた）を検索することができます．<br />
      <br />
        ・表示件数を増やすと重くなる場合があります<br />
        ・不具合，ご要望は管理人ツイッターアカウントまでご連絡ください<br />
    </div>
  );
}
