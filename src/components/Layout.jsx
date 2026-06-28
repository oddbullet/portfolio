import { Outlet } from "react-router";
import { NavBar } from "./navbar/NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
