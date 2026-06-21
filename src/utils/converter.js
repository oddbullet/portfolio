import { Contacts, Experience, Links, Project } from "./schema";

const projectConverter = {
  toFirestore: (project) => {
    return {
      title: project.title,
      description: project.description,
      tags: project.tags,
      links: { demo: project.links.demo, github: project.links.github },
      feature: project.feature,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Project(
      data.title,
      data.description,
      data.tags,
      new Links(data.links.demo, data.links.github),
      data.feature,
    );
  },
};

const contactsConverter = {
  toFirestore: (contacts) => {
    return {
      email: contacts.email,
      linkedin: contacts.linkedin,
      github: contacts.github,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Contacts(data.email, data.linkedin, data.github);
  },
};

const experienceConverter = {
  toFirestore: (experience) => {
    return {
      start: experience.start,
      end: experience.end,
      content: experience.content,
      company: experience.company,
      location: experience.location,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Experience(
      data.start,
      data.end,
      data.content,
      data.company,
      data.location,
    );
  },
};

export { projectConverter, contactsConverter, experienceConverter };
