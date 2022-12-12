import React from "react"
import Pets from "./Pets"


export default function Friends(props){
    const pets = props.pets
    const animals = pets.map(item => {
        return <Pets 
                key={item.name}
                name={item.name}
                breed={item.breed}
                />
    })

    return (
        <div className="person">
            <h1 className="personName">Name: {props.name}</h1>
            <h3 className="personAge">Age: {props.age}</h3>
            <h2>Pets:</h2>
            {animals}
        </div>
    )
}