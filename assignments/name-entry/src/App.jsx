import React from 'react'
import './App.css'


export default function App() {

  const [formData, setFormData] = React.useState('')
  const [list, setList] = React.useState([])
 
  function handleChange(event) {
    setFormData(prevState => [event.target.value])
  }
  
    
    
  function handleSubmit(event) {
    event.preventDefault()
    list.push(formData)
    console.log(list)
    setFormData('')
  }
  
  
  const listItem = list.map(item => <li key={item}>{item}</li>)

  return (
    <div>
      <h1 className='header'>Make A List!!!</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name='title'
          value={formData}
          placeholder='Type here'
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <div className='display'>
        <h1>-{formData}-</h1>
      </div>
      <ul className='list'>
        {listItem}
      </ul>
    </div>
  )
}