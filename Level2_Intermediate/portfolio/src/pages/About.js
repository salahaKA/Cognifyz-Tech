import React from 'react'
import { Box, Typography } from '@mui/material'


function About() {
  return (
    <div>
        <Box sx={{ padding: 2 }}>
            <Typography variant='h4' component='h1' gutterBottom>
                About Me
            </Typography>
            <Typography variant='body1'>
            Hello! My name is Kadeejath Salaha. Post Graduated in Master of computer Application (MCA) and Graduated in BSC Computer Science. I am a Full Stack Developer Intern with a passion for creating interactive and user-friendly web applications. I have experience working with various technologies including React, Node.js, Express, and MySQL.
            </Typography>
        </Box>
    </div>
  )
}

export default About