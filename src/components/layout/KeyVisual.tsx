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
        <PickUpThumbnail id='TGJ9-1LWFtE' singing={new Singing(0, 64, 0, 0)} />
        <PickUpThumbnail id='vbhgQ_C_jaM' singing={new Singing(0, 70, 0, 0)} />
        <PickUpThumbnail id='zK3Lev1A2NY' singing={new Singing(0, 77, 0, 0)} />
        <PickUpThumbnail id='s0p7jwJKkzs' singing={new Singing(0, 76, 0, 0)} />
        <PickUpThumbnail id='k-q93ccVQqM' singing={new Singing(0, 74, 0, 0)} />
        <PickUpThumbnail id='ACImtqaabpw' singing={new Singing(0, 72, 0, 0)} />
        <PickUpThumbnail id='I16cQyBxsKw' singing={new Singing(0, 71, 0, 0)} />
        <PickUpThumbnail id='P4uBibShEK0' singing={new Singing(0, 55, 0, 0)} />
        <PickUpThumbnail id='Lx1PNCat-Q0' singing={new Singing(0, 53, 0, 0)} />
        <PickUpThumbnail id='xfrS_3gRdrg' singing={new Singing(0, 52, 0, 0)} />
        <PickUpThumbnail id='W5IVzLi-Rug' singing={new Singing(0, 48, 0, 0)} />
        <PickUpThumbnail id='Md0TBfwo9rM' singing={new Singing(0, 47, 0, 0)} />
        <PickUpThumbnail id='UpoysjZfWrU' singing={new Singing(0, 36, 0, 0)} />
        <PickUpThumbnail id='NdHPnTd2Jd8' singing={new Singing(0, 33, 0, 0)} />
        <PickUpThumbnail id='syhlmTNW_a8' singing={new Singing(0, 30, 0, 0)} />
      </Slider>
    </div>
  );
}
