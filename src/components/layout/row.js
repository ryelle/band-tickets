// Internal dependencies
import style from "./style.module.css";

function Row({ children }) {
  return <div className={style.row}>{children}</div>;
}

export default Row;
