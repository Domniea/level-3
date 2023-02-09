var readline = require('readline-sync');



var ogInput = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const encriptedNum =[]
const encriptedLetters = []

function cipher(ogInput, shift) {
    const input = ogInput.toLowerCase().split('')
    input.map(letter => {
        const output = alphabet.indexOf(letter)
        if(output === 0) {
            encriptedNum.push(32)
        } else {
            const newValue = output + shift + 64
            newValue > 90 ? 
            encriptedNum.push((newValue - 91) + 64 + shift) :
            encriptedNum.push(newValue)
        }
    })
    encriptedNum.map(letter => {
        const newLetter = String.fromCharCode(letter)
        encriptedLetters.push(newLetter)
    })
    const ogEncripted = encriptedLetters.join('')
    return console.log(ogEncripted)
}

cipher(ogInput, shift)

// const test = 32
// const result = String.fromCharCode(test)
// console.log(result)