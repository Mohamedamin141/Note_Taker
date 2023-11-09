const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
// Require modularised API routes
const notesApi = require("./Routes/index");

// Middleware for parsing data types
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for serving static files from /public
app.use(express.static('public'));

// Middleware for API Routes
app.use(notesApi);


// HTML GET route for notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// HTML GET route for homepage (using wildcard) to return index.html
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () =>{
    console.log(`App listening at PORT http://localhost:3001/`)
})
