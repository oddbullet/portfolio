import { describe, expect, test } from "vitest";
import { add_project, get_all_projects } from "../utils/firestore";
import { Links, Project } from "../utils/schema";

const table_project = {
  daily_breif: new Project(
    "Daily Brief",
    "The best project ever",
    ["React, Node.js"],
    new Links("localhost.com", "github.com"),
    true,
  ),
  habit_tracker: new Project(
    "Habit Tracker",
    "The second best project ever",
    ["React, Node.js, Express"],
    new Links("demo2.com", "github.com/habittracker"),
    false,
  ),
  media_rec: new Project(
    "Media Recommendation",
    "The third best project ever",
    ["React, Node.js, ElasticSearch"],
    new Links("demo.com", "github.com/media"),
    true,
  ),
};

describe("firestore project", () => {
  test("add daily brief", async () => {
    await add_project(table_project["daily_breif"]);
  });

  test("add habit tracker", async () => {
    await add_project(table_project["habit_tracker"]);
  });

  test("add media recommendation", async () => {
    await add_project(table_project["media_rec"]);
  });

  test("get all projects", async () => {
    let projects = [];
    const querySnapshot = await get_all_projects();

    querySnapshot.forEach((doc) => {
      projects.push(doc.data());
    });

    expect(projects).toHaveLength(3);
    expect(projects).toContainEqual(table_project["daily_breif"]);
    expect(projects).toContainEqual(table_project["habit_tracker"]);
    expect(projects).toContainEqual(table_project["media_rec"]);
  });

  // Return a ref and grab it again
  // Get all Feature project
  // edit_project
  // delete_project
});
