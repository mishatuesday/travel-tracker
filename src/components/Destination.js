import React from 'react';
import {Card, Image} from 'semantic-ui-react'

const Destination = props => {
    const {destination} = props
    
    return (
            <Card>
                <Card.Content>
                    <Card.Header>{destination.name}</Card.Header>
                    <Image size= 'large' src={destination.image}/>
                </Card.Content>
            </Card>
    )
}








export default Destination;