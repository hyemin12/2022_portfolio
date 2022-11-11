import useScrollFadeIn from "../hooks/useScrollFadeIn";
import { ExpProps } from "../type";

function ExpItem({ state }: { state: ExpProps[] }) {
  const onScrollFadeIn1 = useScrollFadeIn("up", 1, 0.01);
  return (
    <div className="item">
      <div className="line"></div>
      <ul {...onScrollFadeIn1}>
        {state &&
          state.map((item) => (
            <li key={item.title}>
              <p className="date">{item.date}</p>
              <h4>{item.title}</h4>
              <p>{item.subtitle}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ExpItem;
