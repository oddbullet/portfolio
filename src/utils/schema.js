class Links {
  constructor(demo, github) {
    this.demo = demo;
    this.github = github;
  }
}

class Contacts {
  constructor(email, linkedin, github) {
    this.email = email;
    this.linkedin = linkedin;
    this.github = github;
  }
}

class Project {
  constructor(title, description, tags, links, featured) {
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.links = links;
    this.featured = featured;
  }
}

class Experience {
  constructor(start, end, content, company, location) {
    this.start = start;
    this.end = end;
    this.content = content;
    this.company = company;
    this.location = location;
  }
}

export { Links, Contacts, Project, Experience };
