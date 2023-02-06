import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getNew from '../getNew.png'
import MemeCard from './MemeCard'
import { v4 } from "uuid";

export default function App() {

  const [memeData, setMemeData] = useState(
    {
      topText: '',
      bottomText: '',
      randomImg: 'https://i.imgflip.com/2bqzyl.jpg',
      color: '#123456',
      size: 2,
      id: v4()
    }
  )
  
  const [allMemes, setAllMemes] = useState([])

  const [memeList, setMemeList] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => setAllMemes(res.data.memes))
  }, [])

  function handleChange() {
    const {name, value} = event.target
    setMemeData(prevState => {
      return {
        ...prevState, 
        [name]: value
      }
    })
    console.log(memeData)
  }

  function add() {
    setMemeData(prevState => {
      return {
        ...prevState,
        id: v4()
      }
    })
    setMemeList(prevList => {
      return [
        ...prevList,
        memeData
      ]
    })
  }

  function getMemeImg() {
    const random = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[random].url
    setMemeData(prevState => {
      return {
        ...prevState,
        randomImg: url
      }
    })
  }


  const card = memeList.map(meme => {
    return < MemeCard 
              className='memeCard'
              topText={meme.topText}
              bottomText={meme.bottomText}
              color={meme.color}
              size={meme.size}
              url={meme.randomImg}
              key={meme.id}
              id={meme.id}
            />
  })

  return (
    <div className="main">
      <div className='labelBox'>
        <label htmlFor='input--top' id='label--top'>Top Text</label>
        <label htmlFor='input--bottom' id='label--bottom'>Bottom Text</label>
      </div>
      <div className="form">
        <div className="form--inputs">
          <input 
            type='text'
            name='topText'
            value={memeData.topText}
            onChange={handleChange}
            className='form--input'
            id="input--bottom"
          />
          <input 
            type='text'
            name='bottomText'
            value={memeData.bottomText}
            onChange={handleChange}
            className='form--input'
            id="input--bottom"
          />
          <input 
            type='color'
            name='color'
            value={memeData.color}
            onChange={handleChange}
            className='form--color'
            id="input--color"
          />
          <input 
            type="range"
            name='size'
            value={memeData.size}
            onChange={handleChange}
            className='form--size'
            id="input--size"
            min={1}
            max={10}
          />
        </div>

        <button onClick={getMemeImg}>
          <img src={getNew} />
        </button>
        <div className="meme--container">
          <img className="meme--img" src={memeData.randomImg} />
          <h1 
            className="meme--text" 
            id="topText"
            style={{color: memeData.color, fontSize: `${memeData.size}rem`}}
          >{memeData.topText}</h1>
          <h1 className="meme--text" 
            id="bottomText"
            style={{color: memeData.color, fontSize: `${memeData.size}rem`}}
          >{memeData.bottomText}</h1>
        </div>
        <button
          className="button-add"
          onClick={add}
        >
          Add To List
        </button>
        {card}
      </div>
       
    </div>
  )
}
















// export default function Header() {
//   const [formData, setFormData] = useState(
//     {
//       topText: '',
//       bottomText: '',
//       memeUrl: ''
//     }
//   )

//   const [allMemes, setAllMemes] = useState([])

//   useEffect(() => {
//     fetch('https://api.imgflip.com/get_memes')
//       .then(res => res.json())
//       .then(res => setAllMemes(res.data))
//   }, [])

//   console.log(allMemes)

//   function getMemeImage() {
//     const random = Math.floor(Math.random * allMemes.length)
//     const url = allMemes[random].url
//     setFormData(prevState => ({
//       ...prevState,
//       memeUrl: url
//     }))
//   }

//   function handleChange() {
//     setFormData(prevState => {
//       const {name, value} = event.target
//       return {
//         ...prevState,
//         [name]: value
//       }
//     })
//   }


  
//     return (
//        <div className="main">
//          <div className="form">
//           <div className="form--inputs">
//             <input 
//               type='text'
//               name='topText'
//               value={formData.topText}
//               onChange={handleChange}
              
//             />
//             <input 
//               type='text'
//               name='bottomText'
//               value={formData.bottomText}
//               onChange={handleChange}
//             />
//           </div>
//             <button>
//               <img src={getMemeImage} />
//             </button> 
//          </div>
//          <div className="meme">
//             <h1>{formData.topText}</h1>
//             <h1>{formData.bottomText}</h1>
//             <img />
//          </div>

//        </div>
//     )
// }