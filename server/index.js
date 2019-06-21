const express = require('express');
const app = express();
const { json } = require('body-parser');
const port = 5050;

const {
  searchSuperheroes,
  getHeroDetails
} = require('./controllers/controller');

app.use(json());

app.get('/api/search/:name', searchSuperheroes);
app.get('/api/search/hero/:heroData', getHeroDetails);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
