import React from "react";

export default function ButtonDjSmall(prop) {
    
    return (
        <div className="button">
            <button onClick={prop.handleClick}>DJ Small</button>
        </div>
    )
}