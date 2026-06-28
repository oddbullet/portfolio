import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./HomePage.module.css";
import Footer from "../../components/footer/Footer";
import { GithubIcon, LinkedinIcon } from "../../components/icons/Icons";
import Project from "../../components/project/Project";
import { projects } from "../../components/project/projects";
import SkillTag from "../../components/skills/SkillTag";
import { skillCategories } from "../../components/skills/skills";

export default function HomePage() {
  const el = useRef(null);

  // TODO: Add a delay
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
      <div className={styles.mainContent}>
        <div className={styles.aboutSkillSection}>
          <div className={styles.about}>
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
            <div className={styles.linkSection}>
              <GithubIcon />
              <LinkedinIcon />
            </div>
          </div>
          <div>
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h2>{category.title}</h2>
                <div className={styles.skillDisplay}>
                  {category.skills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.projectSection}>
          <h1>Projects</h1>
          <div className={styles.projects}>
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
