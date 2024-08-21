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
  Chip,
} from "@mui/material";

import DCS from '../assets/project1.jpeg'

function Projects() {
  const projectData = [
    {
      title: "Digital CheckSheet",
      description:
        "Internship project @RDL Technologies, It is a Web Application for Organization(RDl Tech) to make paper based checksheet dynamically",
      modules: "Super-admin, Admin, User",
      technologies: [
        "React.js",
        "CSS",
        "MUI",
        "Node.js",
        "Express",
        "MySQL",
        "RESTful APIs",
        "Git",
      ],
      codeLink: "https://github.com/salahaKA/checklist",
      image: DCS
    },
    {
      title: "Personal Portfolio",
      description:
        "Internship project @CognifyzTechnologies, My Personal Portfolio web application",
      technologies: ["React.js", "CSS", "MUI", "Git"],
      codeLink:
        "https://github.com/salahaKA/Cognifyz-Tech/tree/main/Level2_Intermediate/portfolio",
        image: DCS
    },
    {
      title: "Bharath Enterprises",
      description:
        "MCA 3rd semester BCP project, It is an E-commerce Full stack web Application for our client, the owner of Bharath Enterprises @Mangalore",
      technologies: [
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "Python-Django",
        "SQLite",
        "Git",
      ],
      codeLink: "https://github.com/salahaKA/BharathEnterprises-Django",
      image: DCS
    },
    {
      title: "PenGes",
      description:
        "2nd semester AIMIT mini project, Simple Android Mobile Notes Application",
      technologies: ["Java", "XML", "Firebase"],
      codeLink: "https://github.com/salahaKA/penGes_android_app",
      image: DCS
    },
    {
      title: "We Care",
      description:
        "BSC final year Internship project done @Tequevia Technologies, It’s a full stack Palliative Care web application.",
      technologies: ["HTML", "CSS", "JS", "Bootstrap", "Python-Flask", "MySQL"],
      codeLink: "#",
      image: DCS
    },
  ];

  return (
    <Box className="projects-container">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className="projects-title"
      >
        My Projects
      </Typography>
      <Typography className="projects-subtitle">
        All my projects are available on my GitHub profile.
      </Typography>
      <Grid container spacing={3}>
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="project-card">
              <CardMedia
                component="img"
                height="80"
                image={project.image || "https://via.placeholder.com/300"}
                alt={project.title}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  className="project-title"
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="project-description"
                >
                  {project.description}
                </Typography>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <Chip key={index} label={tech} className="tech-chip" />
                  ))}
                </div>
                <div className="project-buttons">
                  <Button
                    size="small"
                    href={project.codeLink}
                    target="_blank"
                    sx={{
                      margin: "5px",
                      backgroundColor: "#04284f",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#011428",
                      },
                    }}
                  >
                    Source Code
                  </Button>
                  <Button
                    size="small"
                    href={project.liveLink}
                    target="_blank"
                    className="view-button"
                  >
                    View Images
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
