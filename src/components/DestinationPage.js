import React, {useEffect, useState} from 'react';
import Feature from './Feature';
import Filter from './Filter';
import Search from './Search';
import DestinationList from './DestinationList';
import AddDestinationForm from './AddDestinationForm';
import { Switch, Route, NavLink } from 'react-router-dom'

const destinationUrl = 'http://localhost:3000/destinations/'

function DestinationPage() {

    const [destinations, setDestinations] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        fetch(destinationUrl)
        .then(resp => resp.json())
        .then(setDestinations)
    },[])

    const handleAddDestination = newDestination => {
        const updatedDestinationArray = [...destinations, newDestination]
        setDestinations(updatedDestinationArray)
    }

    const displayedDestinations = destinations.filter(destination => {
        return destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return (
        <div>
            <NavLink to="/destinations">Browse and Search Destinations</NavLink><NavLink to="/new">Add New Destination</NavLink>
            <Switch>
                <Route exact path="/">
                    <p>Welcome to Travel Tracker Beta!</p>
                </Route>
                <Route path="/new">
                    <AddDestinationForm handleAddDestination={handleAddDestination}/>
                </Route>
                <Route path="/destinations">
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <Filter />
                    <DestinationList destinations={displayedDestinations}/>
                </Route>
                <Route path="/feature/:id">
                    <Feature destinations={destinations}/>
                </Route>
            </Switch>
        </div>
    )
}







export default DestinationPage;
