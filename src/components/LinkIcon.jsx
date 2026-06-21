import { GithubTag, LinkedinTag } from "./Tags";

export function GithubIcon() {
  return (
    <a
      href="https://github.com/oddbullet"
      target="_blank"
      rel="noreferrer"
      title="oddbullet on github"
    >
      <GithubTag />
    </a>
  );
}

export function LinkedinIcon() {
  return (
    <a
      href="https://www.linkedin.com/in/bill-yang-101716263/"
      target="_blank"
      rel="noreferrer"
      title="Bill Yang on Linkedin"
    >
      <LinkedinTag />
    </a>
  );
}
