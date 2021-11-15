// Create a NamesList component that renders a list of names to the web page.
// a. Insert the Exercise 2 state object from the ComponentExercisesSeedData.txt file into 
// your App.js component.
// b. From the App.js component, pass the array of strings as props to the component you 
// created to be displayed in a list (use an <ol> or <ul> tag)

import React from "react";

const NamesList = (props) => {
    let renderedNames = props.names.map((name) => {
        return <li>{name}</li>;
    });

    return <div>{renderedNames}</div>;
}

export default NamesList;