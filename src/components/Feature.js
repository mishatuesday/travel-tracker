import React from 'react';
import { useParams } from 'react-router-dom'

function Feature({destinations}) {
    const { id } = useParams()
    const destination = destinations[id-1]
    console.log(destination)
    return (
        <div className="feature-container">
            <h2>Feature: {destination ? destination.name : "Loading..."}</h2>
        </div>
    )
}







export default Feature;