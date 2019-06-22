import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import SuperheroProfile from '../SuperheroProfile/SuperheroProfile';
import { connect } from 'react-redux';
import { heroStats } from '../../ducks/reducer';
import Image from 'react-bootstrap/Image';

function Card(props) {
  function myFunc(id) {
    props.heroStats(id);
  }

  return (
    <div
      className='card'
      style={{ width: '50vw', marginTop: '1rem', marginBottom: '1rem' }}
    >
      <Image
        src={props.image}
        className='card-img-top'
        alt='...'
        fluid
        thumnail
      />
      <div className='card-header'>
        <h2 className='card-title text-center'>{props.name}</h2>
        <h5>Identity:</h5>
        <p>{props.fullName}</p>
        <Link to={`/search/${props.id}`}>
          <Button
            onClick={() => myFunc(props.id)}
            className='btn btn-primary'
            block
          >
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { heroStats }
)(Card);
