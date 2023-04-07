import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.main_nav}>
      <span className="fa fa-tasks" />

      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="/favorite">Favorite</a>
        <a href="/about">About</a>
      </div>
    </div>
  );
};

export default NavBar;
