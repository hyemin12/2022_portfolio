import { Dispatch, SetStateAction } from "react";

interface TabProps {
  tabs: string[];
  idx: number;
  setTabIdx: Dispatch<SetStateAction<number>>;
}

function Tab({ tabs, idx, setTabIdx }: TabProps) {
  return (
    <div>
      <ul className="tabs">
        {tabs.map((tab, i) => (
          <li
            className={"tab" + (idx === i ? " active" : "")}
            onClick={() => {
              setTabIdx(i);
            }}
            key={i}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tab;
