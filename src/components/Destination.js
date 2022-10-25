import React from 'react';

const Destination = props => {
    const {destination} = props
    
    return (
        <div className="destination-list">
            <p>{destination.name}</p>
            <img src={destination.image} alt={destination.name}></img>
        </div>
    )
}








export default Destination;