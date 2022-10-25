import React from 'react';
import Destination from './Destination'

const DestinationList = props => {
    const {destinations} = props

    const showDestinationList = destinations.map(destination => <Destination key={destination.id} destination={destination}/>)

    return (
        <div>
            <h3>Destination List:</h3>
            {showDestinationList}
        </div>
    )
}


export default DestinationList;