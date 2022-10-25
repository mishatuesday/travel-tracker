import React from 'react';

const Destination = props => {
    const {destination} = props
    
    return (
        <div className="destination-list">
            <p>{destination.name}</p>
            <img src={destination.image} alt={`Photo of ${destination.name}`}></img>
        </div>
    )
}








export default Destination;