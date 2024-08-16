import React from "react";
import "../styles/Projects.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Title } from "@mui/icons-material";

function Projects() {
  const projectData = [
    {
      title: "Digital CheckSheet",
      description:
        "Internship project @RDL Technologies, It is a Web Application for Organization(RDl Tech) to make paper based checksheet dynamically",
      modules: "Super-admin, Admin, User",
      Technologies:
        "React.js, CSS, MUI, Node.js, Express, MySQL, RESTful APIs, git",
      codeLink: "https://github.com/salahaKA/checklist",
    },
    {
      title: "personal Portfolio",
      description:
        "Internship project @CognifyzTechnologies, My Personal Portfolio web application",
      // modules:'Super-admin, Admin, User',
      Technologies: "React.js, CSS, MUI, git",
      codeLink:
        "https://github.com/salahaKA/Cognifyz-Tech/tree/main/Level2_Intermediate/portfolio",
    },
    {
      title: "Bharath Enterprises",
      description:
        "MCA 3rd semester BCP project, It is a E-commerse Full stack web Application for our client, the owner of Bharath Entreprices @mangalore",
      // modules:'Admin, User',
      Technologies: "HTML, CSS, JS,bootstrap, Python-Django, Sqlite3, git",
      codeLink: "https://github.com/salahaKA/BharathEnterprises-Django",
    },
    {
      title: "PenGes",
      description:
        "2nd semester AIMIT mini project, Simple Android Mobile Notes Application",
      // modules:'Super-admin, Admin, User',
      Technologies: "java, XML, Firebase",
      codeLink: "https://github.com/salahaKA/penGes_android_app",
    },
    {
      title: "We Care",
      description:
        "BSC final year Intership projec done @tequevia technologies, Its a full stack Palliative Care web full stack web application.",
      // modules:'',
      Technologies: "HTML, CSS, JS,botstrap, Python-Flask, MySQL ",
      codeLink: "#",
    },
  ];
  return (
    <Box className="projects-container">
      <Typography ariant="h4" component="h1" gutterBottom>
        My Projects
      </Typography>
      <Typography>
        All My basic projects are available on my github profile
      </Typography>
      <Grid container spacing={3}>
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="project-card">
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {project.technologies}
                </Typography>
                <Button size="small" href={project.liveLink} target="_blank">
                  View Images
                </Button>
                <Button size="small" href={project.codeLink} target="_blank">
                  Source Code
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
