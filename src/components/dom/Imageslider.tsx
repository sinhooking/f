import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // 기본 Swiper CSS
import 'swiper/css/bundle'; // Swiper 번들 CSS (스와이프에 필요한 모든 것 포함)
import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 53.125vw;
  height: 31.25vw;
`


const Imageslider = ({ isReadySlide }) => {
    const [localLoad, setlocalLoad] = useState(false);
    useEffect(() => {
        setlocalLoad(isReadySlide);
        return () => {
            setlocalLoad(false);
        }
    }, [isReadySlide])
    
    return (
        <ImageContainer style={{
            transform: `translateX(${localLoad ? 0 : '-100%'})`,
            transition: 'transform 1s'
          }}>
            <Swiper
              spaceBetween={30} style={{
                width: '100%', height: '100%',
                padding: '12px',
                backgroundColor: 'var(--primary)',
              }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide ><img style={{ height: '100%', margin: '0 auto' }} src="/img/ruby/1.jpg" alt="Slide 1" /></SwiperSlide>
              <SwiperSlide ><img style={{ height: '100%', margin: '0 auto' }} src="/img/ruby/2.jpg" alt="Slide 2" /></SwiperSlide>
              <SwiperSlide ><img style={{ height: '100%', margin: '0 auto' }} src="/img/ruby/3.jpg" alt="Slide 3" /></SwiperSlide>
            </Swiper>
          </ImageContainer>
    );
}

export default Imageslider;
