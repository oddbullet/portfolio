import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import Layout from "./components/Layout.jsx";

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
