// Internal dependencies
import style from './style.module.css';

function Layout({ header, sidebar, form }) {
  return (
    <div className={style.container}>
      <header className={style.header}>{header}</header>
      <div className={style.sidebar}>{sidebar}</div>
      <div className={style.form}>{form}</div>
    </div>
  );
}

export default Layout;
