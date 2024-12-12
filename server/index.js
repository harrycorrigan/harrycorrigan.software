const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use( bodyParser.json() );
app.use(express.json({"limit": "5mb"}));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      console.log("Weird JSON received, dropping!");
      return res.status(422).send("Invalid JSON" ); // Bad request
  }
  next();
});

require("./api/submit_contact")(app)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`App running at address: http://127.0.0.1:${port}/`)
})