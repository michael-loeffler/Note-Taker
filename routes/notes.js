//-- IMPORTS RELEVANT PACKAGES AND MODULES --//
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid'); // package to create unique indentifiers for data
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils'); // *** CITATION: These helper functions were borrowed from the __Trilogy Education Services, LLC__ Coding Bootcamp, Module 11- Express, Activity 28: Stu_Mini-Project *** //

//-- GET ROUTE TO RETURN THE PREVIOUSLY SAVED NOTE DATA WRITTEN TO THE db.json FILE --//
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//-- POST ROUTE TO ACCEPT A NEW NOTE IN THE REQUEST BODY AND ADD IT TO THE db.json FILE --//
notes.post('/', (req, res) => {
    const { title, text } = req.body;
    // variable names here had to carefully match those used in the index.js file in the public directory so that it could be accurately referenced later
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        // Logs a confirmation message to the user over the response and the console
        res.json(`Your note titled '${title}' has been added successfully.`);    
        console.log(`Your note titled "${title}" has been added successfully.`)    
    } else {
        res.error('Error in adding note');
    }
});

//-- DELETE ROUTE TO ACCEPT, AS A PARAMETER, THE UNIQUE ID OF A SAVED NOTE TO BE DELETED FROM THE db.json FILE --//
notes.delete('/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((notes) => {
            // after reading the data from the db.json file, uses a filter to create a new array with all notes except for the one with the id passed in as a parameter above
            const newNotesDB = notes.filter((note) => note.id !== noteID);

            // then writes a new file with the new notes array (newNotesDB)
            writeToFile('./db/db.json', newNotesDB);
            
            // Logs a confirmation message to the user over the response and the console 
            res.json(`Your note has been deleted.`);
            console.log(`Your note has been deleted.`);
        });
});

module.exports = notes;