import { Dispatch, SetStateAction, useState } from "react";
import { StudyProps } from "../type";

interface FilterProp {
  setState: Dispatch<SetStateAction<StudyProps[]>>;
  studiesState: StudyProps[];
  initState: StudyProps[];
}

function Filter({ setState, studiesState, initState }: FilterProp) {
  const [isActive, setIsActive] = useState(0);

  const filters = ["All", "Nodejs", "React", "Typescript", "markup", "ect"];

  /** 공부한 내용 필터링하는 함수 */
  function handleFilter(event: any) {
    const a = event.target.outerText;

    const init = initState;
    if (a === "All") {
      setState(studiesState);
      setIsActive(0);
    } else if (a) {
      const newArr = init.filter((item) => item.filter === a);
      setState(newArr);
      setIsActive(event.target.value);
    }
  }
  return (
    <ul className="filter-wrapper">
      {filters.map((a, idx) => (
        <li
          className={"filter-item" + (idx === isActive ? " active" : "")}
          key={idx}
          value={idx}
          onClick={handleFilter}
        >
          {a}
        </li>
      ))}
    </ul>
  );
}
export default Filter;
