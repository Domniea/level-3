import React from "react";

export default function ButtonBR(prop) {
    return (
        <div className="button">
            <button onClick={prop.handleClick}>Bottom Right</button>
        </div>
    )
}