import React, {useState} from 'react';

const amenities = ["Beach", "Nightlife", "5-Star Restaurants", "Hiking", "Museums"]

function AddDestinationForm(props) {
    const {handleAddDestination} = props

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    const [checkedState, setCheckedState] = useState(false)

    const handleOnChange = () => {
         setCheckedState(!checkedState)
         //This is where we need to update, probably needs to be a ternary of some sort
    }

    const handleSubmit = e => {
        e.preventDefault()
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