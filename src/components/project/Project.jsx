import style from "./Project.module.css";
import HabitTodayImg from "../../assets/HabitToday.png";
import fmdb from "../../assets/FMdb.png";
import DailyLogImg from "../../assets/DailyLog.png";
import Zelda from "../../assets/Zelda.png";
import {
  CSharp,
  ExpressTag,
  FirebaseTag,
  GithubAltTag,
  LinkTag,
  MongoDBTag,
  NodeJSTag,
  ReactTag,
  ReduxTag,
} from "../Tags";

export function HabitProject() {
  return (
    <div className={style.projectContainer}>
      <img
        className={style.image}
        src={HabitTodayImg}
        alt="Habit Tracker Logo"
        width={256}
      />
      <div className={style.projectMain}>
        <h2>Habit Tracker</h2>
        <p>
          🎯 A MERN stack habit tracking app designed to make building and
          managing habits simple.
        </p>

        <div className={style.botContent}>
          <div className={style.tags}>
            <MongoDBTag />
            <ExpressTag />
            <ReactTag />
            <NodeJSTag />
            <ReduxTag />
          </div>

          <div className={style.links}>
            <a
              className={style.demoLink}
              href="https://habit-tracker-7w3m.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkTag /> Demo
            </a>
            <a
              className={style.githubLink}
              href="https://github.com/oddbullet/habit-tracker"
              target="_blank"
              rel="noreferrer"
            >
              <GithubAltTag /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MediaRecommenderProject() {
  return (
    <div className={style.projectContainer}>
      <img className={style.image} src={fmdb} alt="FMdb Logo" width={256} />
      <div className={style.projectMain}>
        <h2>Media Recommender</h2>
        <p>
          📺 A cross-media recommendation system that identifies and suggests
          similar movies, TV shows, and games. Made with a Team.
        </p>

        <div className={style.botContent}>
          <div className={style.tags}>
            <ReactTag />
          </div>

          <div className={style.links}>
            <a
              className={style.githubLink}
              href="https://github.com/Team-Elastica/MediaRecommender"
              target="_blank"
              rel="noreferrer"
            >
              <GithubAltTag /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DailyLoggerProject() {
  return (
    <div className={style.projectContainer}>
      <img
        className={style.image}
        src={DailyLogImg}
        alt="Daily Logger Logo"
        width={256}
      />
      <div className={style.projectMain}>
        <h2>Daily Logger</h2>
        <p>
          📖 A simple application that allows users to track their thoughts and
          activities throughout the day. This was made to learn React.
        </p>

        <div className={style.botContent}>
          <div className={style.tags}>
            <ReactTag />
            <FirebaseTag />
          </div>

          <div className={style.links}>
            <a
              className={style.demoLink}
              href="https://daily-log-phi.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkTag /> Demo
            </a>

            <a
              className={style.githubLink}
              href="https://github.com/oddbullet/daily-log"
              target="_blank"
              rel="noreferrer"
            >
              <GithubAltTag /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ZeldaCloneProject() {
  return (
    <div className={style.projectContainer}>
      <img
        className={style.image}
        src={Zelda}
        alt="Zelda Screenshot"
        width={256}
      />
      <div className={style.projectMain}>
        <h2>The Legend of Zelda Clone</h2>
        <p>
          🎮 A roguelike game made with Legend of Zelda maps and enemies. Made
          with a Team.
        </p>

        <div className={style.botContent}>
          <div className={style.tags}>
            <CSharp />
          </div>

          <div className={style.links}>
            <a
              className={style.githubLink}
              href="https://github.com/Team-Goober/GooberGame"
              target="_blank"
              rel="noreferrer"
            >
              <GithubAltTag /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
