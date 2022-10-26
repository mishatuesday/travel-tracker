import React, {useState} from 'react';
import {Form, Header, Image} from 'semantic-ui-react'

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
                amenities: newAmenities
            }),
        })
        .then(resp => resp.json())
        .then(newDestination => handleAddDestination(newDestination))
    }
    // make this an abstracted function, call in .then ?
    // setName("")
    // setCountry("")
    // setImage("")
    // setCheckedState(false, false, false, false, false)


    return (
        <div className="new-destination-segment">
            <Header as='h1' image>
                <Image src='https://cdn-icons-png.flaticon.com/512/2798/2798097.png'/>
                Add New Destination
            </Header>
            <Form className="new-destination-form" onSubmit ={e => handleSubmit(e)}>
                {/* <form className="new-destination-form" onSubmit ={e => handleSubmit(e)}> */}
                <Form.Group widths='equal'>
                    <Form.Input type="text" name="name" fluid label='Destination Name' placeholder="Destination Name" value={name} onChange={e => setName(e.target.value)}/>
                    <Form.Input type="text" name="name" fluid label='Destination Country' placeholder="Destination Country" value={country} onChange={e => setCountry(e.target.value)}/>
                    <Form.Input type="text" name="image" fluid label='Image URL' placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)}/>
                </Form.Group>
                    {/* <div className="amenity-list">
                        <h3>Select Amenities:</h3> */}
                        <label>Select Amenities:</label>
                <Form.Group widths='equal'>
                        <ul className="amenity-list-options">
                            {amenities.map((name, index) => {
                                return (
                                    <div key={index}>
                                        <div className="amenities-list-item">
                                            <input
                                                type="checkbox" 
                                                control="input"
                                                id={`custom-checkbox-${index}`} 
                                                name={name} 
                                                value={name}
                                                checked={checkedState[index]}
                                                onChange={() => handleOnChange(index)}
                                            ></input>
                                            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                        </div>
                                    </div>
                                )
                            })}
                        </ul>
                    </Form.Group>
                    {/* </div> */}
                    <Form.Button className="new-destination-submit" type="submit">Add Destination</Form.Button>
                {/* </form> */}
            </Form>
        </div>
    )
}







export default AddDestinationForm;