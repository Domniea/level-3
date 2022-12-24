import React from 'react'
import img from '../images/troll-face.png'

export default function Header() {
    return (
        <div className='header'>
            <img src={img} className='header--img'/>
            <h2 className='header--left' >Meme Generator</h2>
            <h3 className='header--right'>React Course - Project 3</h3>
        </div>
    )
}


