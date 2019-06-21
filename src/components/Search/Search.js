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
        'Getting mad...',
        'Saving Metropolis...',
        'Assembling Avengers...'
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
    // this.setState({ isLoading: true });
    // axios
    //   .get(`/api/search/${this.state.search}`)
    //   .then((response) => {
    //     // console.log(response.data);
    //     this.setState({
    //       superheroResults: response.data.results,
    //       apiResponse: response.data,
    //       isLoading: false
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.setState({ isErr: true });
    //   });
  };

  render() {
    // console.log(this.props.superhero);
    return (
      <div style={{ minHeight: '100vh' }}>
        <form
          onSubmit={this.searchSuperheroes}
          className='input-group mb-3'
          className='d-flex justify-content-center'
        >
          <input
            name='search'
            onChange={(e) => this.inputSearch(e.target.value)}
            placeholder='Superhero Name'
            // style={{ textTransform: 'capitalize' }}
            required={true}
            className='form-control w-25'
          />
          <button className='btn btn-outline-primary'>Search</button>
        </form>
        {this.props.isLoading ? (
          <div
            // style={{ minHeight: '100vh' }}
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
        ) : (
          <div className='d-flex flex-row justify-content-around align-items-center'>
            {this.props.superhero ? <SuperheroList /> : null}
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
