import { FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SwiperButtonRight = ({ pos }) => {
  const swiper = useSwiper();

  return (
    <button aria-label="Right Slider Button"
      onClick={() => swiper.slideNext()}
      className={` text-2xl text-white group-hover:right-2 bg-black/40 hover:bg-black/50 p-3 z-20 transition-all duration-200 rounded-full`}
    >
      <FaChevronRight />
    </button>
  );
};

export default SwiperButtonRight;
