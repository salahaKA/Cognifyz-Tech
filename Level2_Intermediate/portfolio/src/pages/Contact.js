import React, { useState } from "react";
import "../styles/Contact.css";
import { Button, Grid, TextField, Typography } from "@mui/material";

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMsg = "";
    switch (name) {
      case "name":
        if (!value) errorMsg = "Name is required.";
        break;
      case "email":
        const emailPatternRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPatternRegx.test(value)) errorMsg = "Invalid email format.";
        break;
      case "password":
        const strongPswdRegx =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!strongPswdRegx.test(value)) errorMsg = "Password must be strong";
        break;
      default:
        break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const errorMsg= validateField(name,value);
    setFormValues({ ...formValues, [name]: value });
    setErrors({...errors,[name]:errorMsg});
  };

  const handleClear = () => {
    setFormValues({
      name: "",
      email: "",
      subject: "",
      password:""
    });
    setErrors({});
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
              error={!!errors.name}
              helperText={errors.name}
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
              error={!!errors.email}
              helperText={errors.email}
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
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              className="contact-input"
              value={formValues.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
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
