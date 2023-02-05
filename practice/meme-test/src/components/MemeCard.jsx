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
                    <h1 className="card--top meme--text">{cardData.topText}</h1>
                    <h1 className="card--bottom meme--text">{cardData.bottomText}</h1>
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
                                </div>
                            </Fragment>
                    }
                </Fragment>
            }
        </div>
        
    )
}