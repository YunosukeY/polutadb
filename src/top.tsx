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
  const [withInst, setWithInst] = useState(true);
  const [aCappella, setACappella] = useState(true);
  const [full, setFull] = useState(true);
  const [onechorus, setOnechorus] = useState(true);
  const [displaynum, setDisplaynum] = useState(5);
  const [hasResult, setHasResult] = useState(false); // 上記の値からは分からない
  const [pagenum, setPagenum] = useState(1);

  // setterにhasResult, pageを更新する副作用を追加
  function updateHasRes(setter: React.Dispatch<React.SetStateAction<any>>) {
    return ((v: any) => {
      setter(v);
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
        withInst={withInst} setWithInst={updateHasRes(setWithInst)}
        aCappella={aCappella} setACappella={updateHasRes(setACappella)}
        full={full} setFull={updateHasRes(setFull)}
        onechorus={onechorus} setOnechorus={updateHasRes(setOnechorus)}
        displaynum={displaynum} setDisplaynum={onDnumChange}
      />
      {hasResult && <Result
        genre={genre}
        type={type}
        video={video}
        song={song}
        artist={artist}
        withInst={withInst}
        aCappella={aCappella}
        full={full}
        onechorus={onechorus}
        displaynum={displaynum}
        pagenum={pagenum}
        setPagenum={setPagenum}
      />}
    </>
  );
}

function About() {
  return (
    <div className='block description-block pane'>
      <h4>About</h4>
        PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber 尾丸ポルカさんの歌（通称：ぽるうた）を検索することができます．<br />
      <br />
        ・表示件数を増やすと重くなる場合があります<br />
        ・不具合，ご要望は管理人ツイッターアカウントまでご連絡ください<br />
    </div>
  );
}
