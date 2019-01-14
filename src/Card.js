import React from 'react';
import PropTypes from 'prop-types';

export const Card = ({onClick, property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} />
            <div className="details">
                <span className="index">{index+1}</span>
                <p className="location">
                    {index+1} {city}<br />
                  @ {address}
                </p>
                <ul className="features">
                    <button onClick={onClick} style={{textAlign: 'right',fontWeight: 'bold'}}>DETAIL</button>
                </ul>
            </div>
        </div>
    )
}
export const CardImg = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={city} style={{height: '100%'}}/>
        </div>
    )
}

CardImg.propTypes = {
    property: PropTypes.object.isRequired
}
Card.propTypes = {
    property: PropTypes.object.isRequired
}
