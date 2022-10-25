import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { data } from "../module/data";

interface InterviewProps {
  title: string;
  text: string;
}

function Interview() {
  const interviews: InterviewProps[] = data.interview;

  const settings = {
    dots: true,
    speed: 1000,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="inner interview-wrapper">
      <h1 className="section-title">셀프 인터뷰</h1>
      <div className="slick-slider">
        <Slider {...settings}>
          {interviews.map((item, idx) => {
            const { title, text } = item;
            return (
              <div className="interview-content" key={idx}>
                <div className="interview-ques">
                  <h4>
                    {idx + 1}. {title}
                  </h4>
                </div>
                <div className="interview-answer">
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
export default Interview;
