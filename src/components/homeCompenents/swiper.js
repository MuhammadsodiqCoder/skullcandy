import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination, Navigation} from "swiper"
import "../../styles/home.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Link} from "react-router-dom"
import "../../styles/responsive.css"

const HomeSwiper = () => {

    const style = {
        swiperWrapper: "hidden w-full h-full",
        swiper: "w-full h-full",
        swiperImg1: "w-full h-full bg-cover bg-center dime2",
        swiperImg2: "w-full h-full bg-cover bg-center mod",
        swiperImg3: "w-full h-full bg-cover bg-center active",
        swiperSlide: "w-full h-full"
    }

    return (
        <div id="swiperWrapper" className={style.swiperWrapper}>
            <Swiper
                modules={[Pagination, Navigation]}
                className={style.swiper}
                pagination={{ clickable: true }}
                loop={true}
                navigation={true}
            >
                <SwiperSlide className={style.swiperSlide}><div to="/dime2-wireless-earbuds" className={style.swiperImg1}></div></SwiperSlide>
                <SwiperSlide className={style.swiperSlide}><div to="/mod-wireless-earbuds" className={style.swiperImg2}></div></SwiperSlide>
                <SwiperSlide className={style.swiperSlide}><div to="/push-active-wireless-earbuds" className={style.swiperImg3}></div></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HomeSwiper;