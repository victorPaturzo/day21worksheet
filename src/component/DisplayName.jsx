import React from "react";
import reactDom from "react-dom";

function DisplayName(props) {
    return(
        <h1>{props.firstName} {props.lastName}</h1>
    );
}

export default DisplayName;