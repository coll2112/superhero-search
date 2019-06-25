import React, { Component } from 'react';
import { connect } from 'react-redux';
import { heroStats } from '../../ducks/reducer';
import Image from 'react-bootstrap/Image';

class SuperheroProfile extends Component {
  componentDidMount = () => {
    this.props.heroStats(this.props.match.params.id);
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render(props) {
    if (this.props.isLoading === false) {
      var { stats } = this.props;
      var { appearance, biography } = stats;
    }

    // console.log(this.props.stats);
    return this.props.isLoading == undefined || this.props.isLoading == true ? (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div
          className='spinner-border text-primary'
          role='status'
          style={{ width: '5rem', height: '5rem' }}
        >
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    ) : (
      <div className='card d-flex flex-row align-items-stretch'>
        <Image
          src={stats.image.url}
          alt={`Image of ${this.props.stats.name}`}
          fluid
          className='card-image-top'
          style={{ minWidth: '50vw' }}
        />
        <div className='' style={{ minWidth: '50vw' }}>
          <div className='card-header'>
            <h2 className='card-title text-center'>{this.props.stats.name}</h2>
          </div>
          <div className='card-body card-text'>
            <h3>Appearance:</h3>
            <p>Gender: {appearance.gender}</p>
            <p>Race: {appearance.race}</p>
            <p>Height: {appearance.height[0]}</p>
            <p>Eye Color: {appearance['eye-color']}</p>
            <p>Hair Color: {appearance['hair-color']}</p>
          </div>
          <div className='card-body card-text'>
            <h3>Biography:</h3>
            <p>Published By: {biography.publisher}</p>
            <p>Full Name: {biography['full-name']}</p>
            <p>First Appearance: {biography['first-appearance']}</p>
          </div>
          <button
            className='btn-lg btn-outline-primary btn-block w-50 m-auto'
            onClick={this.goBack}
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { heroStats }
)(SuperheroProfile);
