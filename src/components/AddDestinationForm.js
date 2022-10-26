import React, {useState} from 'react';

const amenities = ["Beach", "Nightlife", "5-Star Restaurants", "Hiking", "Museums"]

function AddDestinationForm(props) {
    const {handleAddDestination} = props

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    const [checkedState, setCheckedState] = useState([false, false, false, false, false])

    const handleOnChange = (index) => {
        const newCheckedState = checkedState.map((check, thisIndex) => {
            if (thisIndex === index) {
                return !check
            } else {
                return check
            }
        })
        setCheckedState(newCheckedState)
         //This is where we need to update, probably needs to be a ternary of some sort
         // There was only a single checkedState boolean for five amenities; I made it an array of booleans. -Misha
    }

    const handleSubmit = e => {
        e.preventDefault()
        let newAmenities = []
        if (checkedState[0] === true) newAmenities.push("Beach")
        if (checkedState[1] === true) newAmenities.push("Nightlife")
        if (checkedState[2] === true) newAmenities.push("5-Star Restaurants")
        if (checkedState[3] === true) newAmenities.push("Hiking")
        if (checkedState[4] === true) newAmenities.push("Museums")
        console.log(newAmenities)
        fetch(`http://localhost:3000/destinations/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                country: country,
                image: image,
                amenities: amenities
            }),
        })
        .then(resp => resp.json())
        .then(newDestination => handleAddDestination(newDestination))
    }


    return (
        <div className="new-destination-segment">
            <h2>Add New Destination</h2>
                <form className="new-destination-form" onSubmit ={handleSubmit}>
                    <input type="text" name="name" placeholder="Destination Name" value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" name="name" placeholder="Destination Country" value={country} onChange={e => setCountry(e.target.value)}/>
                    <input type="text" name="image" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)}/>
                    <div className="amenity-list">
                        <h3>Select Amenities:</h3>
                        <ul className="amenity-list-options">
                            {amenities.map((name, index) => {
                                return (
                                    <div key={index}>
                                        <div className="amenities-list-item">
                                            <input 
                                                type="checkbox" 
                                                id={`custom-checkbox-${index}`} 
                                                name={name} 
                                                value={name}
                                                checked={checkedState[index]}
                                                onChange={() => handleOnChange(index)}
                                            />
                                            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                        </div>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <button className="new-destination-submit" type="submit">Add Destination</button>
                </form>
        </div>
    )
}







export default AddDestinationForm;