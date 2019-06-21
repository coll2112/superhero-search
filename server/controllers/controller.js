const axios = require('axios');
const url = 'https://superheroapi.com/api/';
const authKey = 2334477980152963;

const searchSuperheroes = (req, res) => {
  let name = req.params.name.split(' ').join('_');
  axios
    .get(`${url}${authKey}/search/${name}`)
    .then((response) => {
      // console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => console.log(err));
};

getHeroDetails = async (req, res) => {
  let heroData = req.params.heroData;
  try {
    let response = await axios.get(`${url}${authKey}/${heroData}`);
    res.status(200).send(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  searchSuperheroes,
  getHeroDetails
};
