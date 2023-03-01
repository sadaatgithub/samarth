import { FaChevronLeft } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';


const SwiperButtonLeft = () => {
    const swiper = useSwiper();

  return (
    <button aria-label="Left Slider Button" onClick={() => swiper.slidePrev()} className="absolute text-2xl text-white top-1/2 -translate-y-1/2
     bg-black/20 hover:bg-black/50 p-3 z-20 transition-all duration-200 group-hover:left-2 -left-12 rounded-full">
<FaChevronLeft/>

    </button>
  )
}

export default SwiperButtonLeft