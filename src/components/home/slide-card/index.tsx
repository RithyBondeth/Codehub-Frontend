import { A11y, Autoplay, EffectCoverflow, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';

export default function SlideCard() {
    return (
        <Swiper 
            className="h-[500px] w-full bg-primary"
            effect="coverflow" 
            coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        > 
            <SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}