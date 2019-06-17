const axios = require('axios');

const searchSuperheroes = (req, res) => {
  axios
    .get(
      `https://superheroapi.com/api/2334477980152963/search/${
        req.body.superhero
      }`
    )
    .then((response) => {
      console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  searchSuperheroes
};
