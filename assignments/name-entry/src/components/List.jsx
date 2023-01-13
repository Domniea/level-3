import React from "react";

export default function List(props) {

    const list = []
    

    return(
        <div>
            <h1>Display:</h1>
            <h3>{props.listItem}</h3>
        </div>
    )
}