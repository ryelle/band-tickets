// Internal dependencies
import css from "./style.module.css";

function Layout({ header, sidebar, form }) {
  return (
    <div className={css.container}>
      <header className={css.header}>{header}</header>
      <div className={css.sidebar}>{sidebar}</div>
      <div className={css.form}>{form}</div>
    </div>
  );
}

export default Layout;
