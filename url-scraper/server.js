const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');

const app = express();
const port = 3002;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $('title').text();
    const h1Text = $('h1').text();

    res.json({ title, h1Text });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while scraping the URL.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
