//-- IMPORTS RELEVANT PACKAGES AND ESTABLISHES FIRST ROUTE MODULE --//
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const app = express();

//-- INITIALIZES THE PORT OR ALLOWS IT TO BE SET BY AN ENVIRONMENT VARIABLE PASSED AS AN ARGUMENT IN THE COMMAND LINE --//
const PORT = process.env.PORT || 3001;

//-- MIDDLEWARE TO ACCEPT DATA IN MULTIPLE FORMS --//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

//-- STATIC ASSET TO SEND FILES FROM THE PUBLIC FOLDER AND USE RELATIVE PATHING --//
app.use(express.static('public'));

//-- SENDS THE notes.html FILE TO THE USER ALONG THE ROUTE FOR /NOTES --//
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//-- SENDS THE index.html FILE TO THE USER ALONG ANY ROUTE OTHER THAN /NOTES --//
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);