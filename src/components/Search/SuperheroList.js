import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { getSuperheroes } from '../../ducks/reducer';

function SuperheroList(props) {
  // console.log(props.superhero);

  return props.superhero.map((e, id) => {
    const { appearance, biography, image } = e;
    return (
      <Card
        key={id}
        name={e.name}
        height={appearance.height[0]}
        gender={appearance.gender}
        race={appearance.race}
        fullName={biography['full-name']}
        publisher={biography.publisher}
        firstAppearance={biography['first-appearance']}
        image={image.url}
        id={e.id}
      />
    );
  });
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  { getSuperheroes }
)(SuperheroList);
