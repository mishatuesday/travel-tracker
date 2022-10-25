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

    useEffect(() => {
        fetch(destinationUrl)
        .then(resp => resp.json())
        .then(setDestinations)
    },[])

    return (
        <div>
            <NavLink to="/destinations">Destinations</NavLink>
            <Switch>
                <Route exact path="/">
                    <p>Welcome to Travel Tracker Beta!</p>
                </Route>
                <Route path="/new">
                    <AddDestinationForm />
                </Route>
                <Route path="/destinations">
                    <Search />
                    <Filter />
                    <DestinationList destinations={destinations}/>
                </Route>
                <Route path="/feature/:id">
                    <Feature destinations={destinations}/>
                </Route>
            </Switch>
        </div>
    )
}







export default DestinationPage;
