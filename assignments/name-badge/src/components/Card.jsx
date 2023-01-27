import React from "react";

export default function Card(props) {
    const id = props.id
    const number = props.phoneNumber
    const updateNumber = number.slice(0,3) + '-' + number.slice(3, 6) + '-' + number.slice(6, 10)
    
    return (
        <div className="badge">
            <h1 className="badge--header" style={id %  2 === 0 ? {backgroundColor: 'blue'} : {backgroundColor: 'red'}}>Badge# {id}</h1>
            <div className="badge--body">
                <h3 style={{marginRight: 'auto'}}>Name: {`${props.firstName} ${props.lastName}`}</h3>
                <h3 style={{marginLeft: 'auto'}}>Phone: {updateNumber}</h3>
                <h3 style={{marginRight: 'auto'}}>Place Of Birth: {props.placeOfBirth}</h3>
                <h3 style={{marginLeft: 'auto'}}>Favorite Food: {props.favoriteFood}</h3>
                <h3 style={{marginRight: 'auto'}}>Email: {props.email}</h3>
                <div className="badge--about">{props.about}</div>
            </div> 
        </div>
    )
}



