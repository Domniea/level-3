import { useState } from 'react'
import { useEffect } from 'react'
import readline from 'readline-sync'
import './App.css'

function App() {
  const name = readline.question('whats your name?')
  return (
    <div className="App">
      <h1>Test!!!</h1>
    </div>
  )
}

export default App
