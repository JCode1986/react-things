# react-things

## Author: Joseph Hangarter

### Overview
* Create a web app with a top level App component
  * Header
  * ThingList
  * Footer
* thingList should be an array of plain old JavaScript objects (aka POJO) that represent a thing that has a name.
  * E.g. {name:’rake’}
* Header component should…
  * receive a things count as a prop
  * display a heading
  * display the current count of things
* ThingList component should…
  * receive a list of things as a prop
  * receive a function to call when a new thing is created.
  * Display an unordered list composed of ThingItem components
  * Display a form that allows creation of a thing
  * When user creates new thing the rest of application should update appropriately.
* Header thing count should update
* ThingList should add a new ThingItem to end of list
* ThingItem component should…
  * receive a name as a prop
* Footer component should…
  * Display some placeholder text (e.g. lorem ipsum)
