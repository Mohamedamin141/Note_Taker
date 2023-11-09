const notesApi = require('express').Router();
const fs = require('fs').promises;

notesApi.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf-8')
        .then((data) => {
            let notes = JSON.parse(data);
            return res.json(notes);
        })
});

notesApi.post('/api/notes', (req, res) =>{
    fs.readFile('./db/db.json', 'utf-8')
    .then((data) => {
        let notes = JSON.parse(data);
        let newNote = {
            title : req.body.title,
            text : req.body.text,
        };
        notes.push(newNote);
        return fs.writeFile('./db/db.json', JSON.stringify(notes), 'utf-8')
        .then(() => {
            return res.json(newNote);
        });
    })
   
});

module.exports = notesApi;