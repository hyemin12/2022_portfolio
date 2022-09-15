import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider(props: { children: React.ReactNode }) {
  const settings = {
    arrows: false,
    // dots: false,
    speed: 5000,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slick-slider">
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
}
export default SlickSlider;
