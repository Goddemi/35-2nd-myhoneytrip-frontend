import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import styled from 'styled-components';

const Carousel = () => {
  const [mainCarouselData, setMainCarouselData] = useState([]);
  useEffect(() => {
    fetch('/data/MainCarouselData.json')
      .then(res => res.json())
      .then(result => {
        setMainCarouselData(result);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1900,
  };

  return (
    <Slick>
      <Slider {...settings}>
        <CarouselData alt="carousel" src={mainCarouselData[3]?.src} />
        <CarouselData alt="carousel" src={mainCarouselData[0]?.src} />
        <CarouselData alt="carousel" src={mainCarouselData[4]?.src} />
        <CarouselData alt="carousel" src={mainCarouselData[2]?.src} />
        <CarouselData alt="carousel" src={mainCarouselData[1]?.src} />
        <CarouselData alt="carousel" src={mainCarouselData[5]?.src} />
      </Slider>
    </Slick>
  );
};

export default Carousel;

const CarouselData = styled.img`
  width: 590px;
  margin-right: 20px;
  margin-top: 20px;
  padding: 10px;
  object-fit: cover;
  cursor: pointer;
  z-index: 10;
`;

const Slick = styled.div`
  justify-content: center;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  z-index: 10;
`;
