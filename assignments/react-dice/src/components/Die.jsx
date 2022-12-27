import React from 'react'

export default function Die(props) {
    return (
        <div className='die' onClick={props.handleClick} >
            <h3>{props.number}</h3>
            <h6>{props.isHeld ? 'HELD' : ''}</h6>
        </div>
    )
}