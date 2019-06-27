import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div
      style={{
        minHeight: '100vh'
      }}
      className='d-flex flex-column align-items-center justify-content-center container-fluid landing'
    >
      <h2 className='display-2'>Superhero Database</h2>
      <h4 className='text-muted lead'>
        Search for your favorite superheroes and see details about them!
      </h4>
      <Link to='/search' className='btn btn-primary btn-lg'>
        Assemble Heroes
      </Link>
    </div>
  );
}
