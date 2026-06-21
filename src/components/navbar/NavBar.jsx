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
    <nav>
      <CustomNavLink link="/" name={"Home"}></CustomNavLink>
      <CustomNavLink link="/experience" name={"Experience"}></CustomNavLink>
      <CustomNavLink link="/projects" name={"Projects"}></CustomNavLink>
    </nav>
  );
}
