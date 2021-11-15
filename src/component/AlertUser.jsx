import React from "react";

// Create a AlertUser component that renders a button that says “Click Me” 
// a. When the button is clicked it will pop up an alert box that says “devCodeCamp”
// b. IMPORTANT: the function that is responsible for the alert() must be defined in the 
// App.js component and passed as a prop to the AlertUser component, so that when the 
// button is clicked it triggers the function that is being passed as a prop.

const AlertUser = (props) => {
    return <button onClick={props.alertUser}>Click me</button>;
}

export default AlertUser;