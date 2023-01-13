import React from 'react'
import Die from './Die'
import Die1 from './dice/Die1'
import Die2 from './dice/die2'
import Die3 from './dice/Die3'
import Die4 from './dice/Die4'
import Die5 from './dice/Die5'
import Counter from './Counter'
import ReRoll from './ReRoll'


export default function Dicebox() {

    const [startDie, setStartDie] = React.useState([0, 0, 0, 0, 0])
    const [count, setCount] = React.useState(3)
    const [isHeld, setIsHeld] = React.useState(false)
    const [d1Hold, setd1Hold] = React.useState(false)
    const [d2Hold, setd2Hold] = React.useState(false)
    const [d3Hold, setd3Hold] = React.useState(false)
    const [d4Hold, setd4Hold] = React.useState(false)
    const [d5Hold, setd5Hold] = React.useState(false) 
    const [d1Number, setD1Number] = React.useState(0)
    const [d2Number, setD2Number] = React.useState(0)
    const [d3Number, setD3Number] = React.useState(0)
    const [d4Number, setD4Number] = React.useState(0)
    const [d5Number, setD5Number] = React.useState(0)





    function rollCount() {
        count > 0 ? 
        setCount(prevState => prevState -1) :
        setCount(prevState => prevState = 3)
        
        count === 0 ? setIsHeld(false) : ''
        count === 0 ? console.log('reset') : console.log('roll')

        

        if(count === 0){
            setd1Hold(false)
            setd2Hold(false)
            setd3Hold(false)
            setd4Hold(false)
            setd5Hold(false)
            setD1Number(0)
            setD2Number(0)
            setD3Number(0)
            setD4Number(0)
            setD5Number(0)
        }

    }

    function randomNumber() {
        return Math.ceil(Math.random() *6)
    }

    

    function rollDice(){
        setStartDie(prevRoll => {
            let newRoll = []
            
            if(count > 0) {
                    d1Hold === false ?
                    setD1Number(randomNumber) :
                    ''
                    d2Hold === false ?
                    setD2Number(randomNumber) :
                    ''
                    d3Hold === false ?
                    setD3Number(randomNumber) :
                    ''
                    d4Hold === false ?
                    setD4Number(randomNumber) :
                    ''
                    d5Hold === false ?
                    setD5Number(randomNumber) :
                    ''
                }
            
            }
        )
    }

    
    function die1Hold() {
        setd1Hold(prevState => !prevState)
        console.log(d1Hold)
    }
    function die2Hold() {
        setd2Hold(prevState => !prevState)
        console.log(d2Hold)
    }
    function die3Hold() {
        setd3Hold(prevState => !prevState)
        console.log(d3Hold)
    }
    function die4Hold() {
        setd4Hold(prevState => !prevState)
        console.log(d4Hold)
    }
    function die5Hold() {
        setd5Hold(prevState => !prevState)
        console.log(d5Hold)
    }

    function hold() {
        setIsHeld(prevState => !prevState)
    }

    // const dice = 
    //     startDie.map(
    //         die => {
    //             return <Die 
    //                         className='die' 
    //                          number={die}
    //                          handleClick={hold}
    //                          isHeld={isHeld}
    //                      />
    //         }
    // )

    return (
        <div className='dicebox'>
            <h2>Dicebox</h2>
            <div className='dice--container'>
                {/* {dice} */}
                <Die1 
                    className='die'
                    number={d1Number}
                    handleClick={die1Hold}
                    isHeld={d1Hold}
                />
                <Die2 
                    className='die'
                    number={d2Number}
                    handleClick={die2Hold}
                    isHeld={d2Hold}
                />
                <Die3 
                    className='die'
                    number={d3Number}
                    handleClick={die3Hold}
                    isHeld={d3Hold}
                />
                <Die4 
                    className='die'
                    number={d4Number}
                    handleClick={die4Hold}
                    isHeld={d4Hold}
                />
                <Die5 
                    className='die'
                    number={d5Number}
                    handleClick={die5Hold}
                    isHeld={d5Hold}
                />
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