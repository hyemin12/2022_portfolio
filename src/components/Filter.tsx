import { Dispatch, SetStateAction } from "react";
import { StudyProps } from "../type";

interface FilterProp {
  isActive: number;
  studiesState: StudyProps[];
  state: StudyProps[];
  setState: Dispatch<SetStateAction<StudyProps[]>>;
  setIsActive: Dispatch<SetStateAction<number>>;
}

function Filter({
  isActive,
  studiesState,
  state,
  setState,
  setIsActive,
}: FilterProp) {
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

    if (a === "All") {
      setState(state);
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
