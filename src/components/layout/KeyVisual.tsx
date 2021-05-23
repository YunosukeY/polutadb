import * as React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Deformed from './Deformed';
import PickUpThumbnail from './PickUpThumbnail';
import { Singing } from '../../data/interfaces';

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
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div style={{ padding: '20px 0' }}>
      <Slider {...settings}>
        <PickUpThumbnail id='LQ_eazT56FA' singing={new Singing(0, 27, 0, 0)} />
        <PickUpThumbnail id='W5IVzLi-Rug' singing={new Singing(0, 48, 0, 0)} />
        <PickUpThumbnail id='Md0TBfwo9rM' singing={new Singing(0, 47, 0, 0)} />
        <PickUpThumbnail id='UpoysjZfWrU' singing={new Singing(0, 36, 0, 0)} />
        <PickUpThumbnail id='NdHPnTd2Jd8' singing={new Singing(0, 33, 0, 0)} />
        <PickUpThumbnail id='syhlmTNW_a8' singing={new Singing(0, 30, 0, 0)} />
      </Slider>
    </div>
  );
}
