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
  let id = req.params.id;
  // try {
  //   let response = await axios.get(`${url}${authKey}/${id}`);
  //   res.status(200).send(response.data);
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).send(err);
  // }
  axios
    .get(`${url}${authKey}/${id}`)
    .then((response) => {
      console.log('hit');
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  searchSuperheroes,
  getHeroDetails
};
