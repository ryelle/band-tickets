// Internal dependencies
import css from "./style.module.css";

function Row({ children }) {
  return <div className={css.row}>{children}</div>;
}

export default Row;
