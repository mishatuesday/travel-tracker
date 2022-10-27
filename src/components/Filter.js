import React from 'react';
import Checkbox from './Checkbox'
// (checkedAmenities.includes(amenity)) ? "checked='true'" : "checked='false'"
function Filter({checkedAmenities, setCheckedAmenities, amenitiesFilter, setAmenitiesFilter}) { // no longer need amenitiesFilter and setAmenitiesFilter once checkedAmenities is working
    // const [checkedAmenities, setCheckedAmenities] = useState([]) // this should live in DestinationPage
    // we'll use checkedAmenities.includes() to see if it's checked...
    const amenities = ["Beach", "5-Star Restaurants", "Nightlife", "Hiking", "Museums", "Zip Line"]
    


    return (
        <div>
            <p>filter by amenities:</p>
            {
                amenities.map((amenity, index) => {
                    return (
                        <Checkbox key={index} amenity={amenity} checkedAmenities={checkedAmenities} setCheckedAmenities={setCheckedAmenities} />
                    )
                })
            }
            {/* <button onClick={() => setCheckedAmenities([])}>clear all</button> */}
        </div>
    )
}






export default Filter