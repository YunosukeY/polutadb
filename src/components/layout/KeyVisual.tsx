import * as React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Youtube from '../result/Youtube';
import { Singing } from '../../data/singings';
import { getVideo } from '../../data/utils';

export default function KeyVisual() {
  const router = useRouter();
  const isTop = () => {
    return router.pathname === '/';
  };

  return (
    <>
      {isTop() && <PickUp />}
      {!isTop() && <Deformed />}
    </>
  );
}

function PickUp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className='pickup'>
      <Slider {...settings}>
        <PickUpThumbnail id='LQ_eazT56FA' singing={new Singing(0, 27, 0, 0)} />
        <PickUpThumbnail id='UpoysjZfWrU' singing={new Singing(0, 36, 0, 0)} />
        <PickUpThumbnail id='NdHPnTd2Jd8' singing={new Singing(0, 33, 0, 0)} />
        <PickUpThumbnail id='syhlmTNW_a8' singing={new Singing(0, 30, 0, 0)} />
      </Slider>
    </div>
  );
}

function PickUpThumbnail(props: { id: string; singing: Singing }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ backgroundColor: '#000000' }}>
        <img
          src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`}
          style={{ width: '100%', opacity: 0.7 }}
          alt={getVideo(props.singing.videoId)}
        />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <Youtube singing={props.singing} fontsize={70} />
      </div>
    </div>
  );
}

export function Deformed() {
  return (
    <div style={{ backgroundColor: '#fff8f8', textAlign: 'center' }}>
      {screen.width <= 500 && (
        <img src='/card.png' alt='OmaruPolka' title='OmaruPolka' style={{ width: screen.width }} />
      )}
      {500 < screen.width && screen.width <= 760 && (
        <img src='/card-smaller-credit.png' alt='OmaruPolka' title='OmaruPolka' style={{ width: screen.width }} />
      )}
      {760 < screen.width && (
        <img
          src='/card-smaller-credit.png'
          alt='OmaruPolka'
          title='OmaruPolka'
          style={{ height: '400px', margin: '0 auto' }}
        />
      )}
    </div>
  );
}
