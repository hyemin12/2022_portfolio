import { ReactNode } from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

interface sectionProps {
  children: ReactNode;
  title: string;
  idProp: string;
}

function Section({ children, title, idProp }: sectionProps) {
  const onScrollFadeIn = useScrollFadeIn();
  return (
    <section className="inner">
      <div id={`${idProp}Ref`}>
        <h1 className="section-title" {...onScrollFadeIn}>
          {title}
        </h1>
        <div>{children}</div>
      </div>
    </section>
  );
}

export default Section;
