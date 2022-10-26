import React from 'react';

function Filter({amenityFilter, setAmenityFilter}) {
    return (
        <div>
        <select value={amenityFilter} onChange={e => setAmenityFilter(e.target.value)}>
            <option value="All">Show All</option>
            <option value="Beach">Beach</option>
            <option value="5-Star Restaurants">5-Star Restaurants</option>
            <option value="Hiking">Hiking</option>
            <option value="Museums">Museums</option>
            <option value="Nightlife">Nightlife</option>
        </select>
    </div>
        )
}






export default Filter