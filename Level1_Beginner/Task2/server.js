const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let formDataStorage = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/submit-form", (req, res) => {
  const { name, email, phone, address } = req.body;

  
  if (!name || !email || !phone || !address) {
    // return res.status(400).send('All fields are required');
    const errorMessage = 'All fields are required';
    return res.render('result', { errorMessage });
  }

  // Store data in temporary storage
  const formData = { name, email, phone, address };
  formDataStorage.push(formData);
  console.log('Stored Data:', formDataStorage);

  // Render the result page with the form data
  res.render('result', formData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
