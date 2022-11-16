import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";

import Section from "./Section";
import Filter from "./Filter";
import StudiesItem from "./StudiesItem";

import { StudyProps } from "../type";
import { data } from "../data";

const Studies = () => {
  const studiesState: StudyProps[] = data.studies;
  const [isActive, setIsActive] = useState(0);
  const [state, setState] = useState<StudyProps[]>(studiesState.slice(0, 6));

  const btnRef = useRef<HTMLButtonElement>(null);

  let count = 1;

  /** 더보기 버튼 누르면 실행되는 함수 (6개씩 추가) */
  const addMoreState = useCallback(() => {
    count += 1;
    const limit = 6;
    const plusArr: StudyProps[] = studiesState.slice(0, limit * count);
    if (plusArr.length >= studiesState.length) {
      btnRef.current.classList.add("hidden");
    }
    setState(plusArr);
  }, [count]);

  return (
    <Section title={"공부한 내용"} idProp={"study"}>
      <div className="studies-wrapper">
        <Filter
          isActive={isActive}
          state={state}
          studiesState={studiesState}
          setState={setState}
          setIsActive={setIsActive}
        />

        <ul
          className={classNames(
            "project-wrapper",
            state.length < 3 && "flex-start"
          )}
        >
          {state &&
            state.map((item) => {
              return <StudiesItem {...item} key={item.id} />;
            })}
        </ul>
        {isActive === 0 && (
          <button className="btn_more" onClick={addMoreState} ref={btnRef}>
            더보기
          </button>
        )}
      </div>
    </Section>
  );
};

export default Studies;
