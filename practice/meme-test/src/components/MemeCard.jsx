import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function MemeCard(props) {
    const [showMeme, setShowMeme] = useState(true)
    const [edit, setEdit] = useState(false)
    const [cardData, setCardData]= useState(
        {
            topText: props.topText,
            bottomText: props.bottomText,
            randomImg: props.randomImg,
            color: props.color,
            size: props.size,
            id: props.id
            
        }
    )
    
    function handleChange() {
        const {name, value} = event.target
        setCardData(prevState => {
          return {
            ...prevState, 
            [name]: value
          }
        })
      }

    function handleDelete() {
        setShowMeme(prevState => !prevState)
    }

    function handleEdit() {
        setEdit(prevState => !prevState)
    }

    return (
       <div className="memeCard">
            {showMeme && 
                <Fragment>
                    <img className="card--img" src={props.url} />
                    <h1 
                        className="card--top meme--text"
                        style={{color: cardData.color, fontSize:`${cardData.size}rem`}}
                        onChange={handleChange}
                    >{
                    cardData.topText}
                    </h1>
                    <h1 
                        className="card--bottom mreme--text"
                        style={{color: cardData.color, fontSize:`${cardData.size}rem`}}
                        onChange={handleChange}
                    >
                        {cardData.bottomText}
                    </h1>
                    <button
                        className="card--delete"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                    <button
                        className="card--edit"
                        onClick={handleEdit}
                    >
                       {!edit ? 'Edit' : 'Save'}
                    </button>
                    {
                        edit &&
                            <Fragment>
                                <div className="card--inputs">
                                    <input 
                                        type='text'
                                        name='topText'
                                        value={cardData.topText}
                                        onChange={handleChange}

                                    />  
                                    <input 
                                         type='text'
                                         name='bottomText'
                                         value={cardData.bottomText}
                                         onChange={handleChange}
                                    />
                                        <input 
                                            type='color'
                                            name='color'
                                            value={cardData.color}
                                            onChange={handleChange}
                                            // className='form--color'
                                            // id="input--color"
                                        />
                                <input 
                                    type="range"
                                    name='size'
                                    value={cardData.size}
                                    onChange={handleChange}
                                    className='form--size'
                                    id="input--size"
                                    min={1}
                                    max={10}
                                />
                                </div>
                            </Fragment>
                    }
                </Fragment>
            }
        </div>
        
    )
}