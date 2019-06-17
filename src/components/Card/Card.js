import React from 'react';

export default function Card(props) {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={props.image} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h3 className='card-title text-center'>{props.name}</h3>
        <p>{props.fullName}</p>
        <p>{props.height}</p>
        <p>{props.gender}</p>
        <p>{props.race}</p>
        <p>{props.publisher}</p>
        <p>{props.firstAppearance}</p>
      </div>
    </div>
  );
}
