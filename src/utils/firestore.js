import { firebase_db } from "./firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { Experience, Links, Project } from "./schema";
import {
  contactsConverter,
  experienceConverter,
  projectConverter,
} from "./converter";
import { getDoc } from "firebase/firestore";

const projectsRef = collection(firebase_db, "projects").withConverter(
  projectConverter,
);

const contactRef = doc(firebase_db, "contacts", "contact");

const experiencesRef = collection(firebase_db, "experiences").withConverter(
  experienceConverter,
);

async function get_all_projects() {
  const querySnapshot = await getDocs(projectsRef);
  return querySnapshot;
}

async function get_all_featured_projects() {
  const q = query(projectsRef, where("featured", "==", true));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

async function add_project(project) {
  await addDoc(projectsRef, project);
}

async function edit_project(id, project) {
  const projectRef = doc(firebase_db, "projects", id);
  await updateDoc(projectRef, {
    title: project.title,
    description: project.description,
    tags: project.tags,
    links: { demo: project.links.demo, github: project.links.github },
    featured: project.featured,
  });
}

async function delete_project(id) {
  await deleteDoc(doc(firebase_db, "projects", id));
}

async function get_contact() {
  const querySnapshot = await getDoc(contactRef);
  return querySnapshot;
}

async function edit_contact(contact) {
  await updateDoc(contactRef, {
    email: contact.email,
    linkedin: contact.linkedin,
    github: contact.github,
  });
}

async function get_all_experiences() {
  const querySnapshot = await getDocs(experiencesRef);
  return querySnapshot;
}

async function add_experience(experience) {
  await addDoc(experiencesRef, experience);
}

async function edit_experience(id, experience) {
  const experienceRef = doc(firebase_db, "experiences", id);
  await updateDoc(experienceRef, {
    start: experience.start,
    end: experience.end,
    content: experience.content,
    company: experience.company,
    location: experience.location,
  });
}

async function delete_experience(id) {
  await deleteDoc(doc(firebase_db, "experiences", id));
}

export {
  get_all_projects,
  get_all_featured_projects,
  add_project,
  edit_project,
  delete_project,
  get_contact,
  edit_contact,
  get_all_experiences,
  add_experience,
  edit_experience,
  delete_experience,
};
