import React from 'react'
import memeData from '../memeData'

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText:'',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/24y43o.jpg'
     })

    const [allMemesImages, setAllMemesImages] = React.useState(memeData)

    function getMeme() {
        const memeList = allMemesImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeList.length)
        const url = memeList[randomNumber].url
        
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
        console.log(url)

    
    }
    return (
        <main className='form'>
                <section className='inputs--area'>
                    <input type="text" className='input' placeholder='Shut up!'/>
                    <input type="text" className='input' placeholder='and take my money'/>
                </section>
                <section className='button--area'>
                    <button 
                        className='button'
                        onClick={getMeme}
                        >
                            Get a new meme image  🖼
                        </button>
                </section>
                <div className='memeDisplay'>
                    <h1 className='memeTop'>{meme.topText}</h1>
                    <h1 className='memeBottom'>{meme.bottomText}</h1>
                    <img
                        className='image'
                        src={meme.randomImage}
                        />
                </div>
        </main>
    )
}