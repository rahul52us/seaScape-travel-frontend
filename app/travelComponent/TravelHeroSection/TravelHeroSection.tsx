import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import { Box } from '@chakra-ui/react';

const TravelHeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,      // 3 seconds
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    pauseOnHover: false,      // never pause – keeps sliding continuously
  };

  return (
    <Box
      height={{ base: '100svh', md: '100vh' }}
      minHeight={{ base: '100svh', md: '100vh' }}
      width="100%"
      overflow="hidden"
      position="relative"
      bg="#F5F1EC"
      display="flex"
      flexDirection="column"
      sx={{
        '.slick-prev, .slick-next': {
          display: 'none !important',
        },
        '.slick-slider, .slick-list, .slick-track, .slick-slide > div': {
          height: '100%',
        },
        '.slick-slider': {
          flex: 1,
          width: '100%',
        },
        '.slick-list': {
          overflow: 'hidden',
        },
        '.slick-slide': {
          opacity: 0,
          transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          height: '100%',
        },
        '.slick-slide > div': {
          height: '100%',
        },
        '.slick-slide.slick-active': {
          opacity: 1,
        },
        '.slick-track': {
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important',
          height: '100%',
        },
      }}
    >
      <Slider {...settings}>
        <Box key="slide1" height="100%">
          <Slide1 />
        </Box>
        <Box key="slide2" height="100%">
          <Slide2 />
        </Box>
        <Box key="slide3" height="100%">
          <Slide3 />
        </Box>
        <Box key="slide4" height="100%">
          <Slide4 />
        </Box>
      </Slider>
    </Box>
  );
};

export default TravelHeroSection;