import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSuperheroes, heroStats } from '../../ducks/reducer';

class SuperheroProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superheroStats: []
    };
  }

  componentDidMount = () => {
    let { id } = this.props.match.params;
    this.props.heroStats(id);
  };

  render(props) {
    if (this.props.isLoading === false) {
      console.log(this.props.stats);
      var { stats } = this.props;
      var { appearance, biography } = stats;
    } else {
      // console.log('loading...');
    }

    return this.props.isLoading === false ? (
      <div>
        <img src={stats.image.url} alt={`Image of ${stats.name}`} />
        <h2>{stats.name}</h2>
        <div>
          <h3>About</h3>
          <p>Gender: {appearance.gender}</p>
          <p>Race: {appearance.race}</p>
          <p>Height: {appearance.height[0]}</p>
          <p>Eye Color:{appearance['eye-color']}</p>
          <p>Hair Color: {appearance['hair-color']}</p>
        </div>
      </div>
    ) : (
      <div>LOADING...</div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { getSuperheroes, heroStats }
)(SuperheroProfile);
