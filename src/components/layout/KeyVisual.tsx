import * as React from 'react';
import { useRouter } from 'next/router';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DeformedIcon from './DeformedIcon';
import Thumbnail from './Thumbnail';
import { Singing } from '../../data/types';

export default function KeyVisual() {
  const router = useRouter();
  const isTop = () => {
    return router.pathname === '/';
  };

  return (
    <>
      {isTop() && <PickUp />}
      {!isTop() && <DeformedIcon />}
    </>
  );
}

function PickUp() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div style={{ paddingBottom: 20 }}>
      <Slider {...settings}>
        <Thumbnail
          id='LQ_eazT56FA'
          singing={
            new Singing(0, '【ORIGINAL SONG+MV】HOLOGRAM CIRCUS - Omaru Polka【尾丸ポルカ/ホロライブ】', '', '0:00')
          }
        />
        <Thumbnail
          id='TGJ9-1LWFtE'
          singing={new Singing(0, '【ORIGINAL SONG+MV】ぽ - Omaru Polka【尾丸ポルカ/ホロライブ/4K】', '', '0:00')}
        />
        <Thumbnail
          id='vbhgQ_C_jaM'
          singing={
            new Singing(0, '【ORIGINAL SONG+MV】エヴァーブルー - Omaru Polka【尾丸ポルカ/ホロライブ/4K】', '', '0:00')
          }
        />
        <Thumbnail
          id='kdYAZZ5SOFk'
          singing={
            new Singing(0, '【ORIGINAL SONG+MV】Pastel Tea Time - Omaru Polka【尾丸ポルカ/ホロライブ】', '', '0:00')
          }
        />
        <Thumbnail
          id='0bo6MVQxY6Y'
          singing={new Singing(0, '【オリジナル楽曲】サイキョウチックポルカ【尾丸ポルカ】', '', '0:00')}
        />
        <Thumbnail
          id='zHD5MCUezVo'
          singing={
            new Singing(
              0,
              '【ホロライブ・サマー2022 MV第1弾】『飛んでK！ホロライブサマー』ショートMV【ホロライブ】',
              '',
              '0:00',
            )
          }
        />
        <Thumbnail
          id='uefGU_oOCdk'
          singing={new Singing(0, '【オリジナル楽曲】屋根裏のエピローグ【尾丸ポルカ】', '', '0:00')}
        />
      </Slider>
    </div>
  );
}
