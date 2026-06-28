import HabitTodayImg from "../../assets/HabitToday.png";
import fmdb from "../../assets/FMdb.png";
import DailyLogImg from "../../assets/DailyLog.png";
import InterpreterImg from "../../assets/Interpreter.png";
import Zelda from "../../assets/Zelda.png";
import gameTodo from "../../assets/gameTodo.png";

export const projects = [
  {
    title: "Habit Tracker",
    description:
      "🎯 A MERN stack habit tracking app designed to make building and managing habits simple.",
    image: HabitTodayImg,
    alt: "Habit Tracker Logo",
    tags: ["mongodb", "express", "react", "nodejs", "redux"],
    demoUrl: "https://habit-tracker-7w3m.onrender.com/",
    githubUrl: "https://github.com/oddbullet/habit-tracker",
  },
  {
    title: "Media Recommender",
    description:
      "📺 A cross-media recommendation system that identifies and suggests similar movies, TV shows, and games. Made with a Team.",
    image: fmdb,
    alt: "FMdb Logo",
    tags: ["react"],
    githubUrl: "https://github.com/Team-Elastica/MediaRecommender",
  },
  {
    title: "Daily Logger",
    description:
      "📖 A simple application that allows users to track their thoughts and activities throughout the day. This was made to learn React.",
    image: DailyLogImg,
    alt: "Daily Logger Logo",
    tags: ["react", "firebase"],
    demoUrl: "https://daily-log-phi.vercel.app/",
    githubUrl: "https://github.com/oddbullet/daily-log",
  },
  {
    title: "The Legend of Zelda Clone",
    description:
      "🎮 A roguelike game made with Legend of Zelda maps and enemies. Made with a Team.",
    image: Zelda,
    alt: "Zelda Screenshot",
    tags: ["csharp"],
    githubUrl: "https://github.com/Team-Goober/GooberGame",
  },
  {
    title: "Interpreter",
    description:
      "💻 A school project on how an interpreter works. This project will tokenize, parse, and execute a custom programming language.",
    image: InterpreterImg,
    alt: "Interpreter Logo",
    tags: ["python"],
    githubUrl: "https://github.com/oddbullet/Tokenizer",
  },
  {
    title: "Gamified Todo List",
    description:
      "🕹️ Gamification of a to-do list. Level up your character as you do your tasks. Made with a team.",
    image: gameTodo,
    alt: "Gamified Todo List Screenshot",
    tags: ["kotlin"],
    githubUrl: "https://github.com/MobileAppDevelopmentKYL/ProdApp",
  },
];
