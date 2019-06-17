import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      superhero: [],
      search: ''
    };
  }

  inputSearch = (e) => {
    this.setState({ search: e });
  };

  searchSuperheroes = () => {
    axios
      .post(`/api/superhero`, { superhero: this.state.search })
      .then((response) => {
        // console.log(response.data);
        this.setState({ superhero: response.data.results });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const superheroMap = this.state.superhero.map((e, id) => {
      return (
        <div key={id}>
          <h3>{e.name}</h3>
          <p>{e.appearance.height[0]}</p>
          <p>{e.appearance.gender}</p>
          <p>{e.appearance.race}</p>
          <p>{e.biography['full-name']}</p>
          <img src={e.image.url} />
        </div>
      );
    });
    console.log(this.state.superhero);
    return (
      <div>
        <input
          name='search'
          onChange={(e) => this.inputSearch(e.target.value)}
          placeholder='superhero'
        />
        <button onClick={this.searchSuperheroes}>Search</button>
        {superheroMap}
      </div>
    );
  }
}

export default Main;
