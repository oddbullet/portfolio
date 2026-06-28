const ICON = (slug, hex, size = 20) =>
  `https://cdn.simpleicons.org/${slug}/${hex}?viewbox=auto&size=${size}`;

export const skills = {
  javascript: {
    label: "JavaScript",
    color: "black",
    bg: "#f7df1e",
    icon: ICON("javascript", "000000"),
  },
  python: {
    label: "Python",
    color: "white",
    bg: "#3776AB",
    icon: ICON("python", "FFFFFF"),
  },
  kotlin: {
    label: "Kotlin",
    color: "white",
    bg: "#7F52FF",
    icon: ICON("kotlin", "FFFFFF"),
  },
  csharp: { label: "C#", color: "white", bg: "#512BD4", icon: null },
  java: { label: "Java", color: "white", bg: "#3A75B0", icon: null },
  sql: { label: "SQL", color: "white", bg: "#3E6E93", icon: null },
  react: {
    label: "React",
    color: "black",
    bg: "#61DAFB",
    icon: ICON("React", "000000"),
  },
  redux: {
    label: "Redux",
    color: "white",
    bg: "#764ABC",
    icon: ICON("redux", "FFFFFF"),
  },
  express: {
    label: "Express.js",
    color: "white",
    bg: "#000000",
    icon: ICON("express", "FFFFFF", 15),
  },
  nodejs: {
    label: "Node.js",
    color: "white",
    bg: "#5FA04E",
    icon: ICON("node.js", "FFFFFF"),
  },
  firebase: {
    label: "Firebase",
    color: "white",
    bg: "#DD2C00",
    icon: ICON("firebase", "FFFFFF"),
  },
  mongodb: {
    label: "MongoDB",
    color: "white",
    bg: "#47A248",
    icon: ICON("mongodb", "FFFFFF"),
  },
};

export const skillCategories = [
  {
    title: "Core",
    skills: ["javascript", "python", "kotlin", "csharp", "java", "sql"],
  },
  { title: "Frontend", skills: ["react", "redux"] },
  { title: "Backend", skills: ["express", "nodejs"] },
  { title: "Other", skills: ["firebase", "mongodb"] },
];
