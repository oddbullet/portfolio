import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import { NavBar } from "./components/navbar/NavBar.jsx";

function Layout() {
  return (
    <>
      <div className="link-section">
        <NavBar />
      </div>
      <Outlet />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />}></Route>
          <Route path="/experience" element={<ExperiencePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
