import React from 'react';

function Feature({destinations}) {
    const destination = destinations[0]
    console.log(destination)
    return (
        <div className="feature-container">
            <h2>Feature: {destination ? destination.name : "Loading..."}</h2>
        </div>
    )
}







export default Feature;