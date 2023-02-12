const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    readAndAppend,
    writeToFile,
} = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Your note titled '${title}' has been added successfully.`);    
        console.log(`Your note titled "${title}" has been added successfully.`)    
    } else {
        res.error('Error in adding note');
    }
});

notes.delete('/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((notes) => {
            const newNotesDB = notes.filter((note) => note.id !== noteID);

            writeToFile('./db/db.json', newNotesDB);

            res.json(`Your note has been deleted.`);
            console.log(`Your note has been deleted.`);
        });
});

module.exports = notes;