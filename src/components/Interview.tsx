import { data } from "../data";
import Slider from "./Slide";
import Section from "../components/Section";

interface InterviewProps {
  title: string;
  text: string;
}

function Interview() {
  const interviews: InterviewProps[] = data.interview;

  return (
    <Section title={"셀프인터뷰"} idProp={"self"}>
      <div className="interview-wrapper">
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
    </Section>
  );
}
export default Interview;
