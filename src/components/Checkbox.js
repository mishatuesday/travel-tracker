import { useState, useEffect } from 'react'

function Checkbox({amenity, checkedAmenities, setCheckedAmenities}) {
    // const initialCheckStatus = checkedAmenities.includes(amenity)
    // const [checked, setChecked] = useState(!initialCheckStatus)
    const [checked, setChecked] = useState(false)

    
    useEffect(() => {   
        if (checked) {
            //add amenity to checkedAmenities
            setCheckedAmenities([...checkedAmenities, amenity])
        } else {
            //remove amenity from checkedAmenities
            const newCheckedAmenities = checkedAmenities.filter(checked => checked !== amenity)
            setCheckedAmenities(newCheckedAmenities)
        }
    }, [checked])
    

    return (
            <label>
                <input key={amenity} type="checkbox" name="filter" id="filter" value={amenity} checked={checked} onChange={() => setChecked(!checked)}/> 
                &nbsp;{amenity}&nbsp;&nbsp;
            </label>
    )
}

export default Checkbox