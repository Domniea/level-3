import React from "react"

export default function ButtonParty(prop) {
    return(
        <div className="button">
            <button onClick={prop.handleClick}>DJ Party</button>
        </div>
    )
}