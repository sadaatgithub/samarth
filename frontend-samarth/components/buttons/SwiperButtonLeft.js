import { FaChevronLeft } from 'react-icons/fa';
import { useSwiper } from 'swiper/react';


const SwiperButtonLeft = () => {
    const swiper = useSwiper();

  return (
    <button aria-label="Left Slider Button" onClick={() => swiper.slidePrev()} className="text-2xl text-white bg-black/40 hover:bg-black/50 p-3  rounded-full">
<FaChevronLeft/>

    </button>
  )
}

export default SwiperButtonLeft