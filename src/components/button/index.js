// Internal dependencies
import css from "./style.module.css";

function Button({ children, type = "submit", ...props }) {
  return (
    <button className={css.button} type="submit">
      Get tickets
    </button>
  );
}

export default Button;
