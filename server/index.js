const path = require('path');
const express = require('express');

const app = express()
const port = 3000

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Handle GET requests to /api route
app.post("/api/submitContact", (req, res) => {
  req.body

});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`App running at address: http://127.0.0.1:${port}/`)
})