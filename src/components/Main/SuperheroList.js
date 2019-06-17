import React from 'react';
import Card from '../Card/Card';

export default function SuperheroList(props) {
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
      />
    );
  });
}
