import React from './Button1'

export default function Button1(prop) {
    return (
        <div className="button">
            <button onClick={prop.handleClick}>Bottom 2</button>
        </div>
    )
}