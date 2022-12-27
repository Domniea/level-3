import React from 'react'

export default function ReRoll(props) {
    return(
        <div className='button--container' onClick={props.handleClick2}>
            <button onClick={props.handleClick}>{props.count > 0 ? 'Roll Dice' : 'Reset'}</button>
        </div>
    )
}