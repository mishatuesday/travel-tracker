import React from 'react';
// (checkedAmenities.includes(amenity)) ? "checked='true'" : "checked='false'"
function Filter({checkedAmenities, setCheckedAmenities, amenitiesFilter, setAmenitiesFilter}) { // no longer need amenitiesFilter and setAmenitiesFilter once checkedAmenities is working
    // const [checkedAmenities, setCheckedAmenities] = useState([]) // this should live in DestinationPage
    // we'll use checkedAmenities.includes() to see if it's checked...
    const amenities = ["Beach", "5-Star Restaurants", "Nightlife", "Hiking", "Museums", "Zip Line"]

    function handleCheckChange(amenity, checked) {
        console.log("filter checkedAmenities", checkedAmenities)
        if (checked) {
            //add amenity to checkedAmenities
            setCheckedAmenities([...checkedAmenities, amenity])
        } else {
            //remove amenity from checkedAmenities
            const newCheckedAmenities = checkedAmenities.filter(checked => checked !== amenity)
            setCheckedAmenities(newCheckedAmenities)
        }
    }


    return (
        <div>
            <p>filter by amenities:</p>
            {
                amenities.map(amenity => {
                    return (
                        <label>
                            <input key={amenity} type="checkbox" name="filter" id="filter" value={amenity} {...checkedAmenities.includes(amenity) ? "checked='true'" : "checked='false'"} onChange={e => handleCheckChange(amenity, e.target.checked)}/>
                            {amenity}
                        </label>
                    )
                })
            }
        </div>
    )
}






export default Filter