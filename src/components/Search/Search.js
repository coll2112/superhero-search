import React, { Component } from 'react';
import Card from '../Card/Card';
import SuperheroList from './SuperheroList';
import axios from 'axios';
import { connect } from 'react-redux';
import { getSuperheroes } from '../../ducks/reducer';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheroResults: [],
      apiResponse: [],
      loadMessage: [
        'Saving the world...',
        'Entering the Batcave...',
        'Stopping Hydra...',
        'Retrieving Infinity Stones...',
        'Saving Metropolis...',
        'Assembling Avengers...',
        'Forming a league...'
      ],
      search: '',
      isLoading: false,
      isErr: false
    };
  }

  inputSearch = (e) => {
    this.setState({ search: e });
  };

  searchSuperheroes = (e, props) => {
    e.preventDefault();
    this.props.getSuperheroes(this.state.search);
  };

  render() {
    console.log(this.props.superhero);
    return (
      <div>
        <form
          onSubmit={this.searchSuperheroes}
          className='input-group mb-3'
          className='d-flex justify-content-center align-items-center'
        >
          <input
            name='search'
            onChange={(e) => this.inputSearch(e.target.value)}
            placeholder='Superhero Name'
            required={true}
            className='form-control w-25'
          />
          <button className='btn btn-outline-primary'>Search</button>
        </form>
        {this.props.isLoading ? (
          <div
            style={{ minHeight: '100vh' }}
            className='text-center d-flex flex-column justify-content-center align-items-center'
          >
            <img
              width='60px'
              src={require('./superman_floating.gif')}
              alt='Loading....'
            />
            <h3 className='lead'>
              {
                this.state.loadMessage[
                  Math.floor(Math.random() * this.state.loadMessage.length)
                ]
              }
            </h3>
          </div>
        ) : this.props.isErr === true && this.props.superhero === undefined ? (
          <div
            style={{ minHeight: '100vh' }}
            className='text-center d-flex flex-column justify-content-center align-items-center'
          >
            <p>Superhero Not Found.</p>
            <p>
              The API being used has some superhero names with spaces in
              between. For example, 'Iron Man' instead of 'Ironman'.
            </p>
          </div>
        ) : this.props.superhero ? (
          <div className='card-group'>
            <SuperheroList />
          </div>
        ) : (
          <div className='text-center'>
            <p>Search for a superhero within the database.</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { getSuperheroes }
)(Search);
