// 2. For the above JSON, Iterate over all for loops(for, for in, for of, forEach)

const resume = {
  name: "Arun Karthik",
  contact: {
    email: "arunkarthik0710@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/arunkarthik0710/"
  },
  education: [
    {
      degree: "Bachelor of Computer Application",
      year: 2024,
    },
  ],
  skills: [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "PHP",
    "MySql",
    "ASP.NET(C#)",
  ],
  Certifications: ["Python", "UI/UX", "Webdevelopment & Hosting"],
};

console.log("Name:", resume.name);

// For in
for (let key in resume.contact) {
  if (resume.contact.hasOwnProperty(key)) {
    console.log(key, ":", resume.contact[key]);
  }
}

// for
for (let i = 0; i < resume.skills.length; i++) {
  console.log("Skill:", resume.skills[i]);
}

// for of
for (let education of resume.education) {
  console.log("Education:", education.degree, "in", education.year);
}

// forEach
resume.Certifications.forEach((key) => {
  console.log("Certifications:", key);
});
