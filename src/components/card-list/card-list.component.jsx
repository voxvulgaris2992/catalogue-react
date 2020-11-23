import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);

// Functional Component, not class-based
// Props = parameters of functional component
// Functional Components don't have access to internal state or life-cycle methods - they simply use Props and render HTML, making them simpler to read and test
// keys used here to allow selective re-rendering which is less resource-intensive
// From app.js, we pass monsters into this component as props below
// Individual monsters passed from card-list component to card component



