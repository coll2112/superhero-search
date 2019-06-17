import React, { Component } from 'react';
import Card from '../Card/Card';
import SuperheroList from './SuperheroList';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      superheroResults: [],
      search: '',
      isLoading: false,
      isErr: false
    };
  }

  inputSearch = (e) => {
    this.setState({ search: e });
  };

  searchSuperheroes = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    axios
      .post(`/api/superhero`, { superhero: this.state.search })
      .then((response) => {
        // console.log(response.data);
        this.setState({ superheroResults: response.data.results, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isErr: true });
      });
  };

  render() {
    console.log(this.state.superhero);
    return (
      <div>
        <form onSubmit={this.searchSuperheroes}>
          <input
            name='search'
            onChange={(e) => this.inputSearch(e.target.value)}
            placeholder='superhero'
          />
          <button>Search</button>
        </form>
        {/* {this.state.isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <SuperheroList superhero={this.state.superhero.results} />
        )} */}
        {this.state.isLoading ? (
          <p className='text-center'>Loading Profiles...</p>
        ) : this.state.isErr ? (
          <p className='text-center'>Superhero Not Found. Try Again.</p>
        ) : (
          <SuperheroList superhero={this.state.superheroResults} />
        )}
      </div>
    );
  }
}

export default Main;
