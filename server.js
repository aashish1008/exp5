const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5500;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // Parses JSON data in POST requests

// Endpoint to read file content
app.get('/read-file', (req, res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ message: 'Error reading file' });
        } else {
            res.json({ content: data });
        }
    });
});

// Endpoint to write to file
app.post('/write-file', (req, res) => {
    const content = req.body.content;
    fs.writeFile('data.txt', content, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).json({ message: 'Error writing to file' });
        } else {
            res.json({ message: 'Content successfully written to file' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
