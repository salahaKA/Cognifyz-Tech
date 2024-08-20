import React, { useState } from "react";
import "../styles/Contact.css";
import { Button, Grid, TextField, Typography } from "@mui/material";

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleClear = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
    });
  };

  return (
    <div className="contact-container">
      <Typography variant="h4" className="contact-title">
        Contact Me
      </Typography>
      <form className="contact-form" noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              className="contact-input"
              value={formValues.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              className="contact-input"
              value={formValues.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Subject"
              name="subject"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              className="contact-input"
              value={formValues.subject}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className="contact-button"
            >
              SEND Message
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              className="contact-button"
              onClick={handleClear}
            >
              CLEAR
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Contact;
