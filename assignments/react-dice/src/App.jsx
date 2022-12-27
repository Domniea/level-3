import React from 'react'
import Dicebox from './components/Dicebox'
import Header from './components/Header'
import './App.css'

function App() {

  const [startDie, setStartDie] = React.useState([0, 0, 6, 6, 6])

  return (
    <div className="App">
      <Header />
      <Dicebox
        number1={startDie[0]}
        number2={startDie[1]}
        number3={startDie[2]}
        number4={startDie[3]}
        number5={startDie[4]}
      />
    </div>
  )
}

export default App


// const d1 = Math.floor(Math.random * 6)
// const d2 = Math.floor(Math.random * 6)
// const d3 = Math.floor(Math.random * 6)
// const d4 = Math.floor(Math.random * 6)
// const d5 = Math.floor(Math.random * 6)