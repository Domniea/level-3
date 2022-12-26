import React, { useState } from 'react'
import Squares from './Squares'
import ButtonParty from './buttons/ButtonParty'
import ButtonDjSmall from './buttons/ButtonDjSmall'
import ButtonBL from './buttons/ButtonBL'
import ButtonBR from './buttons/ButtonBR'
import Button1 from'./buttons/Button1'
import Button2 from'./buttons/Button2'
import Button3 from'./buttons/Button3'
import Button4 from'./buttons/Button4'

export default function Main() {

    // const test = ['green', 'orange', 'blue', 'orange']
    const colors = ['white', 'white', 'white', 'white']

    const [startColors, setStartColors] = React.useState(colors)
    
    function djSmall() {
        setStartColors(prevState => {
            return (
            prevState[0] !== 'white' ? 
            prevState.map(prepre => 'white') : 
            prevState.map(prepre => 'black')
            )
        }
    )}

    function partyDJ() {
        setStartColors(prevState => ['purple', 'purple', prevState[2], prevState[3]])
    }

    function bBL() {
        setStartColors(prevState => [prevState[0], prevState[1], 'blue', prevState[3]])
    }

    function bBR() {
        setStartColors(prevState => [prevState[0], prevState[1], prevState[2], 'blue'])
    }
    
    function button1() {
        setStartColors(prevState => ['green', prevState[1], prevState[2], prevState[3]])
    }
    function button2() {
        setStartColors(prevState => [prevState[0], 'red', prevState[2], prevState[3]])
    }
    function button3() {
        setStartColors(prevState => [prevState[0], prevState[1], 'skyBlue', prevState[3]])
    }
    function button4() {
        setStartColors(prevState => [prevState[0], prevState[1], prevState[2], 'orange'])
    }

    const squares = startColors.map(
        color => <Squares 
                    // key={startColors} 
                    color={color} 
                />)


    // const buttonNames = ['DJ Small', 'DJ Party', 'DJ Profesional left', 'DJ Professional Right']
    // const buttonFunctions = [ djSmall, 'green', 'dark brown', 'grey']
    // const buttons = buttonNames.map((bName, index) => 
    //     <Button 
    //         // key={typeButton}
    //         handleClick={buttonFunctions}
    //         color={typeButton} 
    //     />)

    return (
        <div className='main'>
            <div className='container--square'>
                {squares}
            </div>
            <div className='container--buttons'>
                <ButtonDjSmall
                    handleClick={djSmall}  
                />
                <ButtonParty
                    handleClick={partyDJ}
                />
                <ButtonBL 
                    handleClick={bBL}
                />
                <ButtonBR 
                    handleClick={bBR}
                />
                <Button1 
                    handleClick={button1}
                />
                <Button2 
                    handleClick={button2}
                />
                <Button3 
                    handleClick={button3}
                />
                <Button4 
                    handleClick={button4}
                />
            </div>
        </div>
    )
}


