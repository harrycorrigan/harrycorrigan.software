const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');
const {SitemapStream, streamToPromise} = require("sitemap")

const app = express()
const port = 3000
app.set("trust proxy", 2)

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

app.get('/sitemap.xml', (req, res) => {
  const sitemap = new SitemapStream({ hostname: 'https://harrycorrigan.software' });

  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1 })
  sitemap.write({ url: '/#about', changefreq: 'monthly', priority: 0.8 })
  sitemap.write({ url: '/#contact', changefreq: 'monthly', priority: 0.8 })

  sitemap.end();

  streamToPromise(sitemap).then((sm) => {
    res.header('Content-Type', 'application/xml');
    res.send(sm);
  });
});

require("./api/submit_contact")(app)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`App running at address: http://127.0.0.1:${port}/`)
})