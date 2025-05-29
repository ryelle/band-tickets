// Internal dependencies
import css from "./style.module.css";

function Button({ children, type = "submit", ...props }) {
  return (
    <button className={css.button} type="submit" {...props}>
      {children}
    </button>
  );
}

export default Button;
