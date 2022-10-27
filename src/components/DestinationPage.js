import React, {useEffect, useState} from 'react';
import Feature from './Feature';
import Filter from './Filter';
import Search from './Search';
import DestinationList from './DestinationList';
import AddDestinationForm from './AddDestinationForm';
import { Switch, Route, NavLink } from 'react-router-dom'
import { Button, Icon, Container, Header } from 'semantic-ui-react'

const destinationUrl = 'http://localhost:3000/destinations/'

function DestinationPage() {

    const [destinations, setDestinations] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [checkedAmenities, setCheckedAmenities] = useState([]) // added for amenity filter stretch goal
    const [notes, setNotes] = useState('')

    useEffect(() => {
        fetch(destinationUrl)
        .then(resp => resp.json())
        .then(setDestinations)
    },[])

    const handleAddDestination = newDestination => {
        const updatedDestinationArray = [...destinations, newDestination]
        setDestinations(updatedDestinationArray)
    }

    const filteredDestinations = destinations.filter(destination => { // added for amenities filter
        return checkedAmenities.every(v => destination.amenities.includes(v))
    })

    const displayedDestinations = 
    filteredDestinations.filter(destination => { //changed for amenities filter
        return destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    function updateDestinations(idToUpdate, newNotes) {
        const updatedDestinations = destinations.map(destination => {
            return (destination.id === idToUpdate) ? {...destination, notes: newNotes} : {...destination}
        })
        setDestinations(updatedDestinations)
    }

    return (
        <div>
            <NavLink to="/destinations">
                <Button icon labelPosition='left'>
                    <Icon name='search'/>
                    Search Destinations
                </Button>
            </NavLink>
            <NavLink to="/new">
                <Button icon labelPosition='right'>
                    <Icon name='wordpress forms'/>
                    Add New Destination
                </Button>
            </NavLink>
            <Switch>
                <Route exact path="/">
                    <Container text>
                        <Header as='h1'>Welcome to Travel Tracker</Header>
                    <h3>Set your sights high and explore new destinations</h3>
                    <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="travel-icon"></img>
                    </Container>
                </Route>
                <Route path="/new">
                    <AddDestinationForm handleAddDestination={handleAddDestination}/>
                </Route>
                <Route path="/destinations">
                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <Filter checkedAmenities={checkedAmenities} setCheckedAmenities={setCheckedAmenities}/>
                    <DestinationList destinations={displayedDestinations}/>
                </Route>
                <Route path="/feature/:id">
                    <Feature destinations={destinations} notes={notes} setNotes={setNotes} destinationUrl={destinationUrl} updateDestinations={updateDestinations} />
                </Route>
            </Switch>
        </div>
    )
}







export default DestinationPage;
