import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {Image, Header, Segment, List, Label, Form, TextArea, Checkbox, Divider, Button} from 'semantic-ui-react'


function Feature({destinations, notes, setNotes, destinationUrl, updateDestinations}) {
    const { id } = useParams()
    const destination = destinations[id-1]

    useEffect(() => {
        setNotes(destination.notes)
    }, [])
    
    function saveNotes(e) {
        fetch(`${destinationUrl}${destination.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                notes: notes
            })  
        })
        .then(r => r.json())
        .then(data => updateDestinations(data.id, data.notes))
    }

    return (
        <div> 
            {destination ? 
            <div className="feature-container">
                <Divider/>
                <Header as='h2'>{destination.name}</Header>
                <Segment attached as='h3'>{destination.country}</Segment>
                <Image src={destination.image} alt={destination.name} size='big' rounded bordered centered/> 
                <List as='h4'>
                    <Label>Amenities:</Label>
                        {
                            destination.amenities.map(amenity => <li key={amenity}>{amenity}</li>)
                        }
                </List>
            </div>
            :
            <div>
                <h2>"Loading..."</h2>
            </div>
            }
            <div>
                <Form>
                    <Form.Field>
                        <TextArea
                        type='text'
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                        placeholder='Jot down notes about this destination...' 
                        style={{ minHeight: 80, maxWidth: 600 }}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Button onClick={e => saveNotes(e)}>Save Notes</Button>
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I have visited this destination' />
                    </Form.Field>
                </Form>
            </div>
        </div>
    )
}




export default Feature;