import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getNew from '../getNew.png'
import MemeCard from './MemeCard'

export default function App() {

  const [memeData, setMemeData] = useState(
    {
      topText: '',
      bottomText: '',
      randomImg: 'https://i.imgflip.com/2bqzyl.jpg'
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
  }

  function add() {
    setMemeList(prevList => {
      return [
        ...prevList,
        memeData
      ]
    })
  }

  console.log(memeList)

  function getMemeImg() {
    const random = Math.floor(Math.random() * allMemes.length)
    console.log(random)
    const url = allMemes[random].url
    console.log(url)
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
              url={meme.randomImg}
            />
  })

  return (
    <div className="main">

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
        </div>

        <button onClick={getMemeImg}>
          <img src={getNew} />
        </button>
        <div className="meme--container">
          <h1 className="meme--text" id="topText">{memeData.topText}</h1>
          <img className="meme--img" src={memeData.randomImg} />
          <h1 className="meme--text" id="bottomText">{memeData.bottomText}</h1>
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