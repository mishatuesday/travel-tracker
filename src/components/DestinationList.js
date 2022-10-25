import React from 'react';
import Destination from './Destination'
import { Link } from 'react-router-dom'

const DestinationList = props => {
    const {destinations} = props

    const showDestinationList = destinations.map(destination => <Link key={destination.id} to={`/feature/${destination.id}`}><Destination key={destination.id} destination={destination}/></Link>)

    return (
        <div>
            <h3>Destination List:</h3>
            {showDestinationList}
        </div>
    )
}


export default DestinationList;