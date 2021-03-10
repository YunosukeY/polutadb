import * as React from 'react';
import { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import { useAppState, useSetAppState } from '../lib/appStateContext';
import { Query } from '../lib/query';
import { getGenres, getTypes, getVideos, getSongs, getArtists } from '../data/utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      padding: theme.spacing(1),
      width: '100%',
      height: '5rem',
    },
  }),
);

// eslint-disable-next-line max-lines-per-function
export function Selects(props: {
  query: Query;
  setQuery: (query: string) => void;
  setGenre: (genre: number) => void;
  setType: (type: number) => void;
  setVideo: (video: number) => void;
  setSong: (song: number) => void;
  setArtist: (artist: number) => void;
  setWithInst: (withInst: boolean) => void;
  setACappella: (aCappella: boolean) => void;
  setFull: (full: boolean) => void;
  setOnechorus: (onechorus: boolean) => void;
  setPagenum: (pagenum: number) => void;
}) {
  const appState = useAppState();
  const setAppState = useSetAppState();

  const [isHidden, setIsHidden] = useState(() => {
    const stickyValue = window.localStorage.getItem('isHidden');
    return stickyValue !== null ? stickyValue === 'true' : false;
  });

  useEffect(() => {
    window.localStorage.setItem('isHidden', String(isHidden));
  });

  // checkbox
  function onChange(setter: (v: boolean) => void) {
    return (event: any) => setter(event.target.checked);
  }

  const onClick = () => {
    setIsHidden(!isHidden);
  };

  // 表示件数が更新されたら1ページ目に戻す
  function onDnumChange(newDnum: number) {
    setAppState((state) => ({ ...state, displaynum: newDnum }));
    props.setPagenum(1);
  }

  const fontsize = 28;

  return (
    <div className='pane' id='search'>
      {isHidden && (
        <h4 onClick={onClick} style={{ marginBottom: 0 }}>
          <ArrowRightIcon style={{ fontSize: fontsize }} />
          Search
        </h4>
      )}
      {!isHidden && (
        <>
          <h4 onClick={onClick}>
            <ArrowDropDownIcon style={{ fontSize: fontsize }} />
            Search
          </h4>
          <FullTextSearch query={props.query.query} setQuery={props.setQuery} />
          <div className='row' style={{ paddingBottom: 0 }}>
            <div className='col m6 s12'>
              <Genre genre={props.query.genre} setGenre={props.setGenre} />
            </div>
            <div className='col m6 s12'>
              <Type type={props.query.type} setType={props.setType} />
            </div>
          </div>
          <Video video={props.query.video} setVideo={props.setVideo} />
          <div className='row' style={{ paddingBottom: 0 }}>
            <div className='col m6 s12'>
              <Song song={props.query.song} setSong={props.setSong} />
            </div>
            <div className='col m6 s12'>
              <Artist artist={props.query.artist} setArtist={props.setArtist} />
            </div>
          </div>
          <div className='row' style={{ paddingBottom: 0 }}>
            <div className='col m6 s12'>
              <Inst
                withInst={props.query.withInst}
                setWithInst={onChange(props.setWithInst)}
                aCappella={props.query.aCappella}
                setACappella={onChange(props.setACappella)}
              />
            </div>
            <div className='col m6 s12'>
              <Length
                full={props.query.full}
                setFull={onChange(props.setFull)}
                onechorus={props.query.onechorus}
                setOnechorus={onChange(props.setOnechorus)}
              />
            </div>
          </div>
          <div className='row' style={{ paddingBottom: 0 }}>
            <div className='col m6 s12'>
              <Displaynum displaynum={appState.displaynum} setDisplaynum={onDnumChange} />
            </div>
            <div className='col m6 s12'>
              <DisplayFormat
                displayMode={appState.displayMode}
                setDisplayMode={(displayMode: number) => {
                  setAppState((state) => ({ ...state, displayMode: displayMode }));
                }}
              />
            </div>
          </div>
          <Sort
            sortedBy={appState.sortedBy}
            setSortedBy={(sortedBy: number) => {
              setAppState((state) => ({ ...state, sortedBy: sortedBy }));
            }}
          />
        </>
      )}
    </div>
  );
}

function FullTextSearch(props: { query: string; setQuery: (query: string) => void }) {
  // textをqueryで初期化
  const [text, setText] = useState(props.query);

  function onKeyDown(e: any) {
    if (e.key === 'Enter' && e.keyCode === 13) {
      props.setQuery(text);
    }
  }

  return (
    <div className='input-field'>
      <SearchIcon color='action' className='material-icons prefix' style={{ fontSize: 28 }} />{' '}
      {/* queryにtextをセット */}
      <input
        id='icon_prefix'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <label htmlFor='icon_prefix'>全文検索</label>
    </div>
  );
}

function Genre(props: { genre: number; setGenre: (genre: number) => void }) {
  const classes = useStyles();

  const genres = getGenres().map((genre) => (
    <MenuItem value={genre.i} key={genre.i}>
      {genre.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>曲ジャンル</InputLabel>
      <Select
        value={props.genre === -1 ? '' : props.genre}
        onChange={(event) => props.setGenre(Number(event.target.value))}
      >
        <MenuItem value={-1}>-</MenuItem>
        {genres}
      </Select>
    </FormControl>
  );
}

function Type(props: { type: number; setType: (type: number) => void }) {
  const classes = useStyles();

  const types = getTypes().map((type) => (
    <MenuItem value={type.i} key={type.i}>
      {type.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>枠タイプ</InputLabel>
      <Select
        value={props.type === -1 ? '' : props.type}
        onChange={(event) => props.setType(Number(event.target.value))}
      >
        <MenuItem value={-1}>-</MenuItem>
        {types}
      </Select>
    </FormControl>
  );
}

function Video(props: { video: number; setVideo: (video: number) => void }) {
  const classes = useStyles();

  const videos = getVideos().map((video) => (
    <MenuItem value={video.i} key={video.i}>
      {video.date}: {video.title}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>動画</InputLabel>
      <Select
        value={props.video === -1 ? '' : props.video}
        onChange={(event) => props.setVideo(Number(event.target.value))}
      >
        <MenuItem value={-1}>-</MenuItem>
        {videos}
      </Select>
    </FormControl>
  );
}

function Song(props: { song: number; setSong: (song: number) => void }) {
  const classes = useStyles();

  const songs = getSongs().map((song) => (
    <MenuItem value={song.i} key={song.i}>
      {song.title}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>曲</InputLabel>
      <Select
        value={props.song === -1 ? '' : props.song}
        onChange={(event) => props.setSong(Number(event.target.value))}
      >
        <MenuItem value={-1}>-</MenuItem>
        {songs}
      </Select>
    </FormControl>
  );
}

function Artist(props: { artist: number; setArtist: (artist: number) => void }) {
  const classes = useStyles();

  const artists = getArtists().map((artist) => (
    <MenuItem value={artist.i} key={artist.i}>
      {artist.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>アーティスト</InputLabel>
      <Select
        value={props.artist === -1 ? '' : props.artist}
        onChange={(event) => props.setArtist(Number(event.target.value))}
      >
        <MenuItem value={-1}>-</MenuItem>
        {artists}
      </Select>
    </FormControl>
  );
}

function Inst(props: { withInst: boolean; setWithInst: any; aCappella: boolean; setACappella: any }) {
  return (
    <label>
      <h6 className='text'>伴奏</h6>
      <div className='row'>
        <label className='col s4'>
          <input type='checkbox' className='filled-in' checked={props.withInst} onChange={props.setWithInst} />
          <span className='text'>あり</span>
        </label>
        <label className='col s8'>
          <input type='checkbox' className='filled-in' checked={props.aCappella} onChange={props.setACappella} />
          <span className='text'>なし（アカペラ）</span>
        </label>
      </div>
    </label>
  );
}

function Length(props: { full: boolean; setFull: any; onechorus: boolean; setOnechorus: any }) {
  return (
    <label>
      <h6 className='text'>尺</h6>
      <div className='row'>
        <label className='col s4'>
          <input type='checkbox' className='filled-in' checked={props.full} onChange={props.setFull} />
          <span className='text'>フル</span>
        </label>
        <label className='col s8'>
          <input type='checkbox' className='filled-in' checked={props.onechorus} onChange={props.setOnechorus} />
          <span className='text'>ワンコーラス</span>
        </label>
      </div>
    </label>
  );
}

export function Displaynum(props: { displaynum: number; setDisplaynum: (displaynum: number) => void }) {
  const onChange = (newValue: string) => props.setDisplaynum(Number(newValue));
  const colsize = 's2';
  return (
    <>
      <label>
        <h6 className='text'>表示件数</h6>
      </label>
      <form action='#' className='row'>
        <Radio text='5' onChange={onChange} checked={props.displaynum === 5} colsize={colsize} />
        <Radio text='10' onChange={onChange} checked={props.displaynum === 10} colsize={colsize} />
        <Radio text='20' onChange={onChange} checked={props.displaynum === 20} colsize={colsize} />
        <Radio text='50' onChange={onChange} checked={props.displaynum === 50} colsize={colsize} />
      </form>
    </>
  );
}

export function DisplayFormat(props: { displayMode: number; setDisplayMode: (mode: number) => void }) {
  return (
    <>
      <label>
        <h6 className='text'>表示形式</h6>
      </label>
      <form action='#' className='row'>
        <Radio text='通常' onChange={() => props.setDisplayMode(0)} checked={props.displayMode === 0} colsize='s4' />
        <Radio
          text='簡易表示'
          onChange={() => props.setDisplayMode(1)}
          checked={props.displayMode === 1}
          colsize='s8'
        />
      </form>
    </>
  );
}

export function Sort(props: { sortedBy: number; setSortedBy: (sortedBy: number) => void }) {
  return (
    <>
      <label>
        <h6 className='text'>ソート</h6>
      </label>
      <form action='#' className='row'>
        <Radio text='時系列' onChange={() => props.setSortedBy(0)} checked={props.sortedBy === 0} colsize='s4 m2' />
        <Radio text='曲名' onChange={() => props.setSortedBy(1)} checked={props.sortedBy === 1} colsize='s3 m2' />
        <Radio
          text='アーティスト名'
          onChange={() => props.setSortedBy(2)}
          checked={props.sortedBy === 2}
          colsize='s5 m8'
        />
      </form>
    </>
  );
}

function Radio(props: { text: string; onChange: (newValue: string) => void; checked: boolean; colsize: string }) {
  return (
    <label className={`col ${props.colsize}`}>
      <input
        className='with-gap'
        type='radio'
        value={props.text}
        checked={props.checked}
        onChange={() => props.onChange(props.text)}
      />
      <span className='text'>{props.text}</span>
    </label>
  );
}
