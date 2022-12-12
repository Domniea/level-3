import React from 'react'
import Person from './Person'
import data from '../data'




export default function FriendsList(){
    
    const friends = data.map(item => {
        return <Person 
                key={item.id}
                name={item.name}
                age={item.age}
                pets={item.pets}
                
                />
    })
    return (
        <div className='friendList'>
            <h1 className='title'>Friends List:</h1>
            {friends}
        </div>
    )
}

