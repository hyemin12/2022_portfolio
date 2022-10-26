import Slider from "./Slide";

import { data } from "../module/data";

interface InterviewProps {
  title: string;
  text: string;
}

function Interview() {
  const interviews: InterviewProps[] = data.interview;

  return (
    <div className="inner interview-wrapper">
      <h1 className="section-title" id="selfRef">
        셀프 인터뷰
      </h1>
      <div className="slick-slider">
        <Slider>
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
