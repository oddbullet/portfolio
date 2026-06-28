import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { GithubIcon, LinkedinIcon } from "../components/LinkIcon";
import { NavBar } from "../components/navbar/NavBar";
import {
  DailyLoggerProject,
  GamifyTodoListProject,
  HabitProject,
  InterpreterProject,
  MediaRecommenderProject,
  ZeldaCloneProject,
} from "../components/project/Project";
import {
  CSharp,
  ExpressTag,
  FirebaseTag,
  GithubTag,
  JavaTag,
  JSTag,
  KotlinTag,
  MongoDBTag,
  NodeJSTag,
  PythonTag,
  ReactTag,
  ReduxTag,
  SQLTag,
} from "../components/Tags";
import Typed from "typed.js";

export default function HomePage() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<h1>Bill Yang</h1>"],
      typeSpeed: 70,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="aboutSkill-section">
          <div className="about">
            <p>Hello! I'm</p>
            <br></br>
            <span ref={el}></span>
            <br></br>
            <p>
              an aspiring software engineer and currently focused on full-stack
              web development using React.
            </p>
            <p>
              <br></br>
              I'm always exploring new technologies and building side projects
              to challenge myself.
            </p>
            <div className="link-section">
              <GithubIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div className="skill-section">
            <h2>Core</h2>
            <div className="skill-display">
              <JSTag />
              <PythonTag />
              <KotlinTag />
              <CSharp />
              <JavaTag />
              <SQLTag />
            </div>
            <h2>Frontend</h2>
            <div className="skill-display">
              <ReactTag />
              <ReduxTag />
            </div>
            <h2>Backend</h2>
            <div className="skill-display">
              <ExpressTag />
              <NodeJSTag />
            </div>
            <h2>Other</h2>
            <div className="skill-display">
              <FirebaseTag />
              <MongoDBTag />
            </div>
          </div>
        </div>
        <div className="project-section">
          <h1>Projects</h1>
          <div className="projects">
            <HabitProject />
            <MediaRecommenderProject />
            <DailyLoggerProject />
            <ZeldaCloneProject />
            <InterpreterProject />
            <GamifyTodoListProject />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
