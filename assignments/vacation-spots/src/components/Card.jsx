import React from "react"

export default function Card(props) {
    const season = props.item.timeToGo
    const cost = props.item.price
    // console.log(season)
    return (
        <div>
            <div className={`${season} card` }>
                <h1>{props.item.place}</h1>
                <h2>Price: {props.item.price} {cost < 500 ? '$': null} {(cost > 500) &&(cost < 1000) ? '$$' : null} {cost > 1000 ? '$$$' : null}</h2>
                <h3>Best time to visit: {props.item.timeToGo}</h3>
        </div>
       </div>
    )
}