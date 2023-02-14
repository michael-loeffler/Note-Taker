//-- IMPORTS RELEVANT PACKAGES --//
const express = require('express');
const app = express();

//-- CREATES BRIDGE TO THE NEXT ROUTE MODULE --//
const notesRouter = require('./notes.js');
app.use('/notes', notesRouter);

module.exports = app;