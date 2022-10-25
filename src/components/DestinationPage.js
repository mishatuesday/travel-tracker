import React from 'react';
import Feature from './Feature';
import Filter from './Filter';
import Search from './Search';
import DestinationList from './DestinationList';
import AddDestinationForm from './AddDestinationForm';

function DestinationPage() {
    return (
        <div>
            <h2>Destination Page (Route 2)</h2>
            <Search />
            <Filter />
            <DestinationList />
            <Feature />
            <AddDestinationForm />
        </div>
    )
}







export default DestinationPage;
