import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import faceTroll from '../face.png'

export default function Header(props) {
    return (
        <div className="header">
            <div className="logo">
                <img src={faceTroll} style={{width: '10%', height: '10%'}}/>
                <h1 className='header--left'>Meme Generator</h1>
            </div>
            <h3>React Course - Project 3</h3>
        </div>
    )
}