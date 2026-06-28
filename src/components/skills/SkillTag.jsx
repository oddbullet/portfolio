import styles from "./SkillTag.module.css";
import { skills } from "./skills.js";

export default function SkillTag({ name }) {
  const skill = skills[name];
  // TODO: Return an error tag intead.
  if (!skill) return null;

  return (
    <div
      className={styles.skillTag}
      style={{ color: skill.color, backgroundColor: skill.bg }}
    >
      {skill.icon && <img src={skill.icon} alt="" />}
      {skill.label}
    </div>
  );
}
