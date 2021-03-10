import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import { ScrollToTopOnMount } from '../components/scroll';

export default function Top() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className='pane' id='about'>
        <h4>About</h4>
        <Describe />
      </div>
      <div className='row'>
        <MyCard link='/search' title='Search' icon={SearchIcon} />
        <MyCard link='/favos' title='Favorites' icon={StarIcon} />
        <MyCard link='/stats' title='Statistics' icon={DonutLargeIcon} />
        <MyCard link='/releases' title='Release Notes' icon={ImportContactsIcon} />
      </div>
    </>
  );
}

function MyCard(props: { link: string; title: string; icon: any }) {
  return (
    <div className='col s12 m6'>
      <Link to={props.link}>
        <Card style={{ borderRadius: '10px' }}>
          <CardActionArea style={{ background: 'white' }}>
            <CardContent>
              <h4 style={{ margin: '20px 0' }}>
                <props.icon style={{ fontSize: 25 }} />
                {` ${props.title}`}
              </h4>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}

function Describe() {
  return (
    <div style={{ fontSize: '16px' }}>
      PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber
      尾丸ポルカさんの歌（通称：ぽるうた）を検索することができます．
      <br />
      <br />
      尾丸ポルカさんについてはこちら！
      <br />
      YouTube：<a href='https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA'>Polka Ch. 尾丸ポルカ</a>
      <br />
      Twitter：<a href='https://twitter.com/omarupolka'>尾丸ポルカ</a>
      <br />
      <br />
      諸注意
      <br />
      ・表示件数を増やすと重くなる場合があります．
      <br />
      ・お気に入り情報はブラウザに保存されるため，キャッシュクリアにご注意ください．
      <br />
      ・本サイトは有志による非公式サイトです．不具合，ご要望は<a href='https://twitter.com/k1m1tsu'>管理人Twitter</a>
      までご連絡ください．
      <br />
    </div>
  );
}
