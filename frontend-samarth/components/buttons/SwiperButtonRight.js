import { FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const SwiperButtonRight = ({ pos }) => {
  const swiper = useSwiper();

  return (
    <button aria-label="Right Slider Button"
      onClick={() => swiper.slideNext()}
      className={`absolute top-1/2 -right-12 -translate-y-1/2 text-2xl text-blue-400 group-hover:right-2 bg-black/20 hover:bg-black/50 p-3 z-20 transition-all duration-200`}
    >
      <FaChevronRight />
    </button>
  );
};

export default SwiperButtonRight;
