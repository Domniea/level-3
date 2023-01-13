import React from 'react'
import d0 from './images/d0.png'
import d1 from './images/d1.png'
import d2 from './images/d2.png'
import d3 from './images/d3.png'
import d4 from './images/d4.png'
import d5 from './images/d5.png'
import d6 from './images/d6.png'


export default function Die1(props) {
    let dImage

    props.number === 0 ? dImage = d0 : ''
    props.number === 1 ? dImage = d1 : ''
    props.number === 2 ? dImage = d2 : ''
    props.number === 3 ? dImage = d3 : ''
    props.number === 4 ? dImage = d4 : ''
    props.number === 5 ? dImage = d5 : ''
    props.number === 6 ? dImage = d6 : ''
    return (
        <div className='die' onClick={props.handleClick} >
                <img src={dImage} />
            {/* <h3>{props.number}</h3>
            <h6>{props.isHeld ? 'HELD' : ''}</h6> */}
        </div>
    )
}