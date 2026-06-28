import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a
        className={styles.link}
        href="https://github.com/oddbullet/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        View on Github
      </a>
    </div>
  );
}
