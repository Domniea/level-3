import React from "react"
import Header from './Header'
import Card from './Card'
import data from './data'
import './App.css'

export default function App() {
    

    const vacSpot = data.map(location => {
        // const season = location.timeToGo
        // console.log(season)
        return <Card className={location.timeToGo}
            key={location.id}
            item={location}
        />
        
    })



    return (
        <div>
            <Header />
            <div className="main">
                {vacSpot}
            </div>
        </div>
    )
}