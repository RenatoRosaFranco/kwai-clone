import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

const media = [
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { type: 'image', src: 'https://picsum.photos/id/1012/600/300' },
  { type: 'image', src: 'https://picsum.photos/id/1013/600/300' },
  { type: 'image', src: 'https://picsum.photos/id/1014/600/300' },
  { type: 'image', src: 'https://picsum.photos/id/1015/600/300' },
];

const ProductHero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-hero">
      {/* Carrossel principal */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        className="carrousel"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index} className="hero-swiper-slide">
            {item.type === 'video' ? (
              <video
                controls
                playsInline
                muted
                preload="metadata"
                poster="https://via.placeholder.com/600x300?text=Video"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  backgroundColor: '#000',
                  display: 'block'
                }}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.src}
                alt={`Imagem ${index + 1}`}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  backgroundColor: '#000',
                  display: 'block'
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Miniaturas */}
      <Swiper
        className="product-hero-thumbnails px-2"
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView="auto"
        spaceBetween={4}
        freeMode
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === 'video' ? (
              <video
                className="product-hero-thumbnail"
                muted
                playsInline
                preload="metadata"
              >
                <source src={item.src + '#t=0.5'} type="video/mp4" />
              </video>
            ) : (
              <img
                className="product-hero-thumbnail"
                src={item.src}
                alt={`Miniatura ${index + 1}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductHero;