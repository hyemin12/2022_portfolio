import { Dispatch, SetStateAction } from "react";
import { StudyProps } from "../type";

interface FilterProp {
  isActive: number;
  studiesState: StudyProps[];
  setState: Dispatch<SetStateAction<StudyProps[]>>;
  setIsActive: Dispatch<SetStateAction<number>>;
}

function Filter({ isActive, studiesState, setState, setIsActive }: FilterProp) {
  const filters = [
    "All",
    "Nodejs",
    "React",
    "Typescript",
    "markup",
    "Vanilla JS",
    "ect",
  ];

  /** 공부한 내용 필터링하는 함수 */
  function handleFilter(event: any) {
    const a = event.target.outerText;
    const init = studiesState.slice(0, 6);
    if (a === "All") {
      setState(init);
      setIsActive(0);
    } else if (a) {
      const newArr = [...studiesState].filter((item) => item.filter === a);
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
