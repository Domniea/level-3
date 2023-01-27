import React from 'react'
import { useEffect } from 'react'
import Card from './components/Card'
import './App.css'

export default function App() {
  
  const [badgeNumber, setBadgeNumber] = React.useState(1)
  const [submitOn, setSubmitOn] = React.useState(false)
  const [formData, setFormData] = React.useState(
      {
        id: badgeNumber,
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phoneNumber: '',
        favoriteFood: '',
        about: ''

      }

  )
  
  useEffect(() => {

    console.log(phone.value)
    return  formData.firstName.length &&
            formData.lastName.length &&
            formData.email.length &&
            formData.phoneNumber.length &&
            formData.placeOfBirth.length && 
            formData.favoriteFood.length &&
            formData.about.length > 0 ? 
            setSubmitOn(true) :
            setSubmitOn(false)
  })

  // function validtaion() {
  //   formData.phoneNumber.includes('-') ? console.log('true') : console.log('false')
  // }

  const [cards, setCards] = React.useState([])

  function handleChange(event) {
    const {name, value, type, checked} =  event.target
    // console.log(formData)
    // validtaion()
    if(type === 'number'){      
      phone.value.replace('-', 'boobs')
    }
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type === 'checbox' ? checked : value
      }
    })
  }



  function handleSubmit(event) {
    event.preventDefault()
    setBadgeNumber(prevState => prevState + 1)
    setCards(prevState => {
      return [
        ...prevState,{
          ...formData,
          id: badgeNumber
        }
      ]
    })
    setFormData(prevState => {
      return {
        firstName: '',
        lastName: '',
        email: '',
        placeOfBirth: '',
        phoneNumber: '',
        favoriteFood: '',
        about: ''
      }
    })
  }

  const person = cards.map(person => {
    return <Card 
              key={person.id}
              id={person.id}
              firstName={person.firstName}
              lastName={person.lastName}
              email={person.email}
              phoneNumber={person.phoneNumber}
              placeOfBirth={person.placeOfBirth}
              favoriteFood={person.favoriteFood}
              about={person.about}
            />
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
       
        <input
          id='fName'
          type='text'
          name='firstName'
          value={formData.firstName}
          placeholder='First Name'
          minLength={3}
          // required={true}
          onChange={handleChange}
        />
        <input 
          id='lName'
          type='text'
          name='lastName'
          value={formData.lastName}
          placeholder='Last Name'
          minLength={3}
          // required={true}
          onChange={handleChange}
        />
        <input 
          id='email'
          type='email'
          name='email'
          value={formData.email}
          placeholder='Email'
          minLength={3}
          // required={true}
          onChange={handleChange}
        />
        <input
          id='placeOfBirth'
          type='text'
          name='placeOfBirth'
          value={formData.placeOfBirth}
          placeholder='Place Of Birth'
          minLength={3}
          // required={true}
          onChange={handleChange}
        />
        <div className='phone--field'>
          <label htmlFor='phone' id='phone--label'>* Numbers Only</label>
          <input
              id='phone'
              type='tel'
              name='phoneNumber'
              value={formData.phoneNumber}
              placeholder='Phone Number'
              className='numbersOnly'
              minLength={3}
              required={true}
              onChange={handleChange}
              style={{'width':'50%'}}
            />
        </div>
        <input
          id='favoriteFood'
          type='text'
          name='favoriteFood'
          value={formData.favoriteFood}
          placeholder='Favorite Food'
          minLength={3}
          // required={true}
          onChange={handleChange}
        />
        <textarea 
          id='about'
          type='text'
          name='about'
          value={formData.about}
          placeholder='About'
          minLength={3}
          // required={true}
          onChange={handleChange}
        />
        {/* <button>Submit</button> */}
        { submitOn && <button>Submit</button>}
      </form>
      {person}
    </div>

  )
}


