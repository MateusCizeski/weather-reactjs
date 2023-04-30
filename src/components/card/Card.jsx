import React from 'react';
import propTypes from 'prop-types';

import './Card.css'

export default function Card({ data }) {
    const {
        location,
        current
    } = data;

    return(
        <div className='card-container'>
            <div className='card-localidade'>
                <span className='span-cidade'>{location.name}</span>
                <span className='span-pais'>{`${location.region}, ${location.country}`}</span>
            </div>

            <div className='card-temperatura'>
                <span className='span-temperatura'>{current.temp_c}</span>
                <span className='span-grau'>°C</span>
            </div>

            <div className='card-info'>
                <img src={current.condition.icon} alt="weather icon" />
                <span className='span-tempo'>{current.condition.text}</span>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: propTypes.object
}.isRequired

