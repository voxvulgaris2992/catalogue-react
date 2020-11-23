import React from 'react';

import './card.styles.css';

// This component exists, since card-list component is not responsible for how cards look, only for how cards are listed
// Individual monsters passed into this card component through props.monster from card-list component
// Robohash API has multiple indexed images, which can then correspond to our monsters by using props.monster.id, which are unique numbers

export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div >
);