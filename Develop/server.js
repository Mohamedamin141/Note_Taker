const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const notesApi = require("./Routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(notesApi);


app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () =>{
    console.log(`App listening at PORT http://localhost:3001/`)
})
