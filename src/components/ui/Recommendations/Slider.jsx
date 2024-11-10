import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwipeElement from './SwipeElement';

const Slider = () => {
  const slides = [
    { id: 1, content: "Élément 1" },
    { id: 2, content: "Élément 2" },
    { id: 3, content: "Élément 3" },
    { id: 4, content: "Élément 4" },
    { id: 5, content: "Élément 5" },
    { id: 6, content: "Élément 4" },
    { id: 7, content: "Élément 5" },
    { id: 8, content: "Élément 4" },
    { id: 9, content: "Élément 5" }
  ];

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            navigation={false}
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                slidesPerView: 1, // 1 élément visible pour les petits écrans
                },
                768: {
                slidesPerView: 2, // 2 éléments visibles pour les écrans moyens
                },
                1024: {
                slidesPerView: 3, // 3 éléments visibles pour les écrans larges
                },
                1280: {
                slidesPerView: 4, // 4 éléments visibles pour les très grands écrans
                },
            }}
            >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <SwipeElement/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
