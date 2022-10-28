# Travel Tracker

This is a Flatiron School phase 2 project using React. The idea is to have a list of travel destinations that you can 
track wish list and visited, as well as add your notes on the location.

# The Team

Misha, Kate, and Ceri from Flatiron's SE-LIVE-091922B cohort.

# Setup

Use `json-server --watch db.json` for the pseudo backend
use `npm start` or `yarn start` to serve the React app

# Features

Currently, you can display a list of destinations, see all the details for a single destination, add 
persistent notes, and add persistent new destinations.

# Still needs work

-The 'visited' checkbox is present, but currently does nothing.
-There should be a 'wish list' checkbox as well.
-Both 'visited' and 'wish list' datapoints should be able to 
generate their respective lists

# Known issues

1) If you have more than one amenity filter checked when you navigate away
from the destination list, when you go back to the list it will still be filtered,
but the checkboxes won't be checked. (If you check and uncheck all the boxes, the list
goes back to functioning as normal)

2) If you reload the feature page, everything breaks. We think this is because the 
component initially renders before the fetch is done, leading to undefined props,
 and there is so far no conditional handling for this.
