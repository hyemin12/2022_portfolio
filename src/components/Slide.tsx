import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide(props: { children: React.ReactNode }) {
  const settings = {
    dots: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>{props.children}</Slider>
    </>
  );
}

export default Slide;
