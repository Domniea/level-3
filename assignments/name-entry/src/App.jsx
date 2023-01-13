import React from 'react'


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
  
  
  const listItem = list.map(item => <h1 key={item}>{item}</h1>)

  return (
    <div>
      <h1
      ></h1>
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
      <h1>-{formData}-</h1>
      {listItem}

      


    </div>
  )
}