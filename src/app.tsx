import * as React from "react";
import { mInit } from "./materialize";

export class Main extends React.Component<{}, { page: string }> {
  constructor(props: any) {
    super(props);
    this.state = { page: 'top' };
  }

  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col s12 m12 l10 offset-l1 xl8 offset-xl2" id="sp">
            {this.state.page == 'top' ? <Top /> : <h1>Hello, world!</h1>}
          </div>
        </div>
      </div>
    );
  }
}

class Top extends React.Component<{}, { hasResult: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasResult: false };
  }

  render() {
    return (
      <div>
        <About />
        <Select />
        {this.state.hasResult && <Result />}
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className="block description-block">
        <h4>About</h4>
        PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber 尾丸ポルカさんの歌（通称：ぽるうた）を検索することができます．<br />
        <br />
        ・表示件数を増やすと重くなる場合があります<br />
        ・不具合，ご要望は管理人ツイッターアカウントまでご連絡ください<br />
      </div>
    );
  }
}

class Select extends React.Component {
  componentDidUpdate() {
    mInit();
  }

  render() {
    return (
      <div className="block select-block">
        <h4>Search</h4>

        <label>
          <h6>曲ジャンル</h6>
          <select name="genre" id="genre">
            <option value="-1">-</option>
          </select>
        </label>

        <label>
          <h6>枠タイプ</h6>
          <select name="type" id="type">
            <option value="-1">-</option>
          </select>
        </label>

        <label>
          <h6>動画</h6>
          <select name="video" id="video">
            <option value="-1">-</option>
          </select>
        </label>

        <label>
          <h6>曲</h6>
          <select name="song" id="song">
            <option value="-1">-</option>
          </select>
        </label>

        <label>
          <h6>アーティスト</h6>
          <select name="artist" id="artist">
            <option value="-1">-</option>
          </select>
        </label>

        <label>
          <h6>表示件数</h6>
        </label>
        <form action="#" className="row">
          <label className="col s2 m1">
            <input className="with-gap" name="display-num" type="radio" value="5" checked />
            <span>5</span>
          </label>
          <label className="col s2 m1">
            <input className="with-gap" name="display-num" type="radio" value="10" />
            <span>10</span>
          </label>
          <label className="col s2 m1">
            <input className="with-gap" name="display-num" type="radio" value="20" />
            <span>20</span>
          </label>
        </form>
      </div>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}