import Section from "./Section";
import ExpItem from "./ExpItem";

import { data } from "../data";
import { CerProps, ExpProps } from "../type";

function Experience() {
  const edus: ExpProps[] = data.educations;
  const exps: ExpProps[] = data.experience;
  const cers: CerProps[] = data.certificates;
  return (
    <Section title={"교육 및 기타이력"} idProp={"exp"}>
      <div className="experience-wrapper">
        <ExpItem state={edus} />
        <ExpItem state={exps} />
      </div>
      <h1 className="section-title">자격증</h1>
      <div className="certificate">
        <ul>
          {cers.map((item) => (
            <li key={item.text}>
              <p>{item.date}</p>
              <h4>{item.text}</h4>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Experience;
