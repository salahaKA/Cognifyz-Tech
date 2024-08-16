import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import "../styles/About.css";
import profileImage from "../assets/profile2.jpg";

function About() {
  return (
    <div className="about-container">
      <Box className="about-content" ssx={{ padding: 2 }}>
        <Avatar
          alt="KADEEJATH SALAHA"
          src={profileImage}
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        ></Avatar>
        
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: "bold", marginBottom: 2, color: "#00137f;" }}
        >
          Hello! It's Me is Kadeejath Salaha🙋‍♀️.
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: "bold", marginBottom: 2 }}
        >
          Post Graduated in Master of Computer Application (MCA)
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.6,
            fontWeight: "500",
            color: "#453b3b",
          }}
        >
          I am a Full Stack Developer Intern with a passion for creating
          interactive and user-friendly web applications.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            lineHeight: 1.6,
            fontWeight: "500",
            color: "#414649",
          }}
        >
          I have experience working with various technologies including{" "}
          <strong>React</strong>, <strong>Bootstrap/MUI</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>MySQL</strong>.
        </Typography>
      </Box>
    </div>
  );
}

export default About;
