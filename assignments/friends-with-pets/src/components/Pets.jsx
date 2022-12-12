import React from 'react'

export default function Pets(props){
    return (
        <div className='pets'>
            <h3><span className='petName'>{props.name}</span>/<span className='petsBreed'>{props.breed}</span></h3>
        </div>
    )
}
