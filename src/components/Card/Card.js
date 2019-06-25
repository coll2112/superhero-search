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
    <div className='col-xs-1 col-sm-4 col-md-3'>
      <div className='card' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Image
          src={props.image}
          className='card-img-top'
          alt='Image of Superhero'
          style={{ height: '40vh' }}
        />
        <div className='card-header'>
          <h2 className='card-title text-center'>{props.name}</h2>
          <div className='card-body'>
            <h6 className='card-text'>Identity: </h6>
            {props.fullName == false ? (
              <p className='card-text'>Not Available</p>
            ) : (
              <p className='card-text'>{props.fullName}</p>
            )}
            {/* <p className='card-text'>{props.fullName}</p> */}
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
      </div>
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { heroStats }
)(Card);
