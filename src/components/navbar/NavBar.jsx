import styles from "./NavBar.module.css";
import { NavLink } from "react-router";

function CustomNavLink({ link, name }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? styles.activeNav : "")}
      end
    >
      {name}
    </NavLink>
  );
}

export function NavBar() {
  return (
    <div className={styles.navSection}>
      <nav className={styles.nav}>
        <CustomNavLink link="/" name="Home" />
        <CustomNavLink link="/experience" name="Experience" />
        <CustomNavLink link="/projects" name="Projects" />
      </nav>
    </div>
  );
}
