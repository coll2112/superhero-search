import React from 'react';
import { Link } from 'react-router-dom';
import SuperheroProfile from '../SuperheroProfile/SuperheroProfile';
import { connect } from 'react-redux';

function Card(props) {
  // console.log(props.id);
  return (
    <div className='card' style={{ width: '15rem' }}>
      <img src={props.image} className='card-img-top img-fluid' alt='...' />
      <div className='card-header'>
        <h2 className='card-title text-center'>{props.name}</h2>
        <h5>Identity:</h5>
        <p>{props.fullName}</p>
        <Link to={`/search/${props.id}`}>
          <button className='btn btn-primary'>View More</button>
        </Link>
      </div>
      {/* <div className='card-body'>
        <h5>Attributes:</h5>
        <div className='d-flex justify-content-between'>
          <p>{props.height}</p>
          <p>{props.gender}</p>
          <p>{props.race}</p>
        </div>
        <h5>First Appearance:</h5>
        <p>{props.firstAppearance}</p>
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Card);
