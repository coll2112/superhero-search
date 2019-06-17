const express = require('express');
const app = express();
const { json } = require('body-parser');
const port = 5050;

const { searchSuperheroes } = require('./controllers/controller');

app.use(json());

app.post('/api/superhero', searchSuperheroes);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
