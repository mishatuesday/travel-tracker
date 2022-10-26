import React from 'react';
import { useParams } from 'react-router-dom'
import {Image, Header, Segment, List, Label} from 'semantic-ui-react'


function Feature({destinations}) {
    const { id } = useParams()
    const destination = destinations[id-1]

    return (
        <div> 
        {destination ?
        <div className="feature-container">
            <Header as='h1'>{destination.name}</Header>
            <Segment attached as='h3'>{destination.country}</Segment>
            <Image src={destination.image} alt={destination.name} size='big' rounded bordered centered/> 
            <List as='h4'>
                <Label>Amenities:</Label>
                {
                    destination.amenities.map(amenity => <li key={amenity}>{amenity}</li>)
                }
            </List>
        </div>
        :
        <div>
        <h2>"Loading..."</h2>
        </div>}
    </div>)
}




export default Feature;

// <div> 
// {destination ?
// <div className="feature-container">
//     <h2>Feature: {destination.name}</h2>
//     <p>Country: {destination.country}</p>
//     <img src={destination.image} alt={destination.name} /> 
//         <ul>
//         {
//             destination.amenities.map(amenity => <li key={amenity}>{amenity}</li>)
//         }
//         </ul>
// </div>
// :
// <div>
//     <h2>"Loading..."</h2>
// </div>}
// </div>