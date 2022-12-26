import React from "react";

export default function ButtonBL(prop) {
    return (
        <div className="button">
            <button onClick={prop.handleClick}>Bottom Left</button>
        </div>
    )
}