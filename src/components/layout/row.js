// Internal dependencies
import css from "./style.module.css";

function Row({ children, style }) {
  return (
    <div className={css.row} style={style}>
      {children}
    </div>
  );
}

export default Row;
