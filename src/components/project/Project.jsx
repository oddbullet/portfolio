import styles from "./Project.module.css";
import SkillTag from "../skills/SkillTag";
import { DemoIcon, GithubMark } from "../icons/Icons";

export default function Project({
  title,
  description,
  image,
  alt,
  tags,
  demoUrl,
  githubUrl,
}) {
  return (
    <div className={styles.projectContainer}>
      <img className={styles.image} src={image} alt={alt} width={256} />
      <div className={styles.projectMain}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={styles.botContent}>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <SkillTag key={tag} name={tag} />
            ))}
          </div>

          <div className={styles.links}>
            {demoUrl && (
              <a
                className={styles.demoLink}
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <DemoIcon /> Demo
              </a>
            )}
            <a
              className={styles.githubLink}
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <GithubMark /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
