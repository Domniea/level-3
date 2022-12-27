import React from 'react'
import Die from './Die'
import Counter from './Counter'
import ReRoll from './ReRoll'


export default function Dicebox() {

    const [startDie, setStartDie] = React.useState([0, 0, 0, 0, 0])
    const [count, setCount] = React.useState(3)
    const [isHeld, setIsHeld] = React.useState(false)

    let rollLog = []

    function rollCount() {
        count > 0 ? 
        setCount(prevState => prevState -1) :
        setCount(prevState => prevState = 3)
        
        count === 0 ? setStartDie(prevState => prevState =[0, 0, 0, 0, 0]) : ''
        count === 0 ? setIsHeld(false) : ''
        count === 0 ? console.log('reset') : console.log('roll')

    }

    function rollDice(){
        setStartDie(prevRoll => {
            let newRoll = []
            if(count > 0) {
                for(let i = 0; i < prevRoll.length; i++){
                    isHeld === false ?
                    newRoll.push(Math.ceil(Math.random() * 6)) :
                    newRoll.push(prevRoll[i])
                    }

                    console.log(newRoll)
                    return newRoll
                }
            
            }
        )
    }

    function hold() {
        setIsHeld(prevState => !prevState)
    }

    const dice = 
        startDie.map(
            die => {
                return <Die 
                            className='die' 
                             number={die}
                             handleClick={hold}
                             isHeld={isHeld}
                         />
            }
    )

    return (
        <div className='dicebox'>
            <h2>Dicebox</h2>
            <div className='dice--container'>
                {dice}
            </div>
            <ReRoll
                handleClick={rollDice}
                handleClick2={rollCount}
                count={count}
            />
            <Counter 
                count={count}
            />
        </div>
    )
}


// extra functions


// function randomNumb() {
//     const random = Math.ceil(Math.random() * 6)
//     return random
// }