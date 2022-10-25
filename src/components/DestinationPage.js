import React, {useEffect, useState} from 'react';
import Feature from './Feature';
import Filter from './Filter';
import Search from './Search';
import DestinationList from './DestinationList';
import AddDestinationForm from './AddDestinationForm';

const destinationUrl = 'http://localhost:3000/destinations/'

function DestinationPage() {

    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch(destinationUrl)
        .then(resp => resp.json())
        .then(setDestinations)
    },[])

    return (
        <div>
            <h2>Destination Page (Route 2)</h2>
            <Search />
            <Filter />
            <DestinationList destinations={destinations}/>
            <Feature />
            <AddDestinationForm />
        </div>
    )
}







export default DestinationPage;
