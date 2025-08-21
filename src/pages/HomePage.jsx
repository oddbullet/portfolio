import Footer from "../components/Footer";
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
} from "../components/Tags";

export default function HomePage() {
  return (
    <>
      <div className="link-section">
        <a
          href="https://github.com/oddbullet"
          target="_blank"
          rel="noreferrer"
          title="oddbullet on github"
        >
          <GithubTag />
        </a>

        <a
          href="https://www.linkedin.com/in/bill-yang-101716263/"
          target="_blank"
          rel="noreferrer"
          title="Bill Yang on Linkedin"
        >
          <svg
            className="icon"
            width="2rem"
            viewBox="0 0 640 640"
            style={{
              "--iconColor": "var(--iconDefaultColor)",
              "--iconHoverColor": "#0A66C2",
            }}
          >
            <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
          </svg>
        </a>
      </div>
      <div className="main-content">
        <div className="aboutSkill-section">
          <div className="about">
            <h1>About</h1>
            <p>Hello! 👋</p>
            <br></br>
            <p>
              I'm Bill Yang an aspiring software engineer and currently focused
              on full-stack web development using React.
            </p>
            <p>
              <br></br>
              I’m always exploring new technologies and building side projects
              to challenge myself.
            </p>
          </div>
          <div className="skill-section">
            <h2>Core</h2>
            <div className="skill-display">
              <JSTag />
              <PythonTag />
              <KotlinTag />
              <CSharp />
              <JavaTag />
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
