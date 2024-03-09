import css from "./Options.module.css";

export default function Options({ update, reset, total }) {
  return (
    <ul className={css.list}>
      <button onClick={() => update("good")}>Good</button>
      <button onClick={() => update("neutral")}>Neutral</button>
      <button onClick={() => update("bad")}>Bad</button>
      {total !== 0 && <button onClick={() => reset()}>Reset</button>}
    </ul>
  );
}