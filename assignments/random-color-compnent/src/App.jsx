import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('')

  function handleClick() {
    return setCount(prevState => prevState + 1)
  }

  useEffect(() => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(res => {
        setColor(res.colors[0].hex)
        // console.log(res)
        console.log(res.colors[0].tags)
        console.log('rendered')
      })
      .catch(err => console.log(err))
  },[count])

  return (
    <div className="app" style={{'backgroundColor': `#${color}`}}>
      <h1 className='header'>Random Color Component</h1>
      <h2>Your Count is {count}</h2>
      <button
        onClick={handleClick}
      >Change Color</button>
    </div>
  )
}

export default App
