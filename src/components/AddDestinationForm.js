import React from 'react';

function AddDestinationForm(props) {
    const {handleAddDestination} = props

    return (
        <div className="new-destination-form">
            <h2>New Destination</h2>
                <form>
                    <input type="text" name="name" placeholder="Destination Name" />
                    <input type="text" name="name" placeholder="Destination Country" />
                    <input type="text" name="image" placeholder="Image URL" />
                    <button type="submit">Destination</button>
                </form>
        </div>
    )
}







export default AddDestinationForm;