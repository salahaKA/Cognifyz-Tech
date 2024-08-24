const express = require("express");
const cors= require("cors")

const app = express();
app.use(cors())
const port = 5001;
const host= 'localhost';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Projects API');
  });

let projects = [
  {
    id: 1,
    title: "Digital CheckSheet",
    description: "Internship project @RDL Technologies...",
    technologies: ["React.js", "CSS", "MUI"],
    codeLink: "https://github.com/salahaKA/checklist",
  },
  {
    id: 2,
    title: "Personal portfolio",
    description: "Internship project @RDL Technologies...",
    technologies: ["React.js", "CSS", "MUI"],
    codeLink: "https://github.com/salahaKA/checklist",
  },
];

app.post("/api/projects", (req, res) => {
  const newProject = { id: projects.length + 1, ...req.body };
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.put("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex((p) => p.id === parseInt(id));
  if (projectIndex !== -1) {
    projects[projectIndex] = { ...projects[projectIndex], ...req.body };
    res.json(projects[projectIndex]);
  } else {
    res.status(404).json({ message: "Project not found" });
  }
});

app.delete("/api/projects/:id", (req, res) => {
  const { id } = req.params;
  projects = projects.filter((p) => p.id != parseInt(id));
  res.status(204).send();
});

app.listen(port,host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
