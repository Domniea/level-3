import React from 'react'

export default function Counter(props) {
    return (
        <div className='counter'>
            <h1>{props.count} Rolls Left</h1>
        </div>
    )
}