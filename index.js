const all_characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
     "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
     "{","[","}","]",",","|",":",";","<",">",".","?","/"];

const lettersAndNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
     "6", "7", "8", "9"]

const lettersAndSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?","/"]

const lettersOnly = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let generateBtnEl = document.getElementById('generate-password-btn')
let firstPasswordEl = document.getElementById('first-password-el')
let secondPasswordEl = document.getElementById('second-password-el')
let includeNumbersEl = document.getElementById('add-numbers')
let includeSymbolsEl = document.getElementById('add-symbols')
let passwordLengthEl = document.getElementById('password-length')
let lengthPEl = document.getElementById('length-p')

generateBtnEl.addEventListener('click', function() {
    let firstPassword = ''
    let secondPassword = ''
    let charactersLength = 0
    let chosenArray = []

    if (includeNumbersEl.checked && includeSymbolsEl.checked) {
        chosenArray = all_characters
    } else if (includeNumbersEl.checked) {
        chosenArray = lettersAndNumbers
    } else if (includeSymbolsEl.checked) {
        chosenArray = lettersAndSymbols
    } else {
        chosenArray = lettersOnly
    }

    for (let i = 0; i < passwordLengthEl.value; i++) {
        firstPassword += chosenArray[Math.floor(Math.random() * chosenArray.length)]
        secondPassword += chosenArray[Math.floor(Math.random() * chosenArray.length)]
    }
    firstPasswordEl.textContent = firstPassword
    secondPasswordEl.textContent = secondPassword
    firstPassword = ''
    secondPassword = ''
    firstPasswordEl.style.color = '#55F991'
    secondPasswordEl.style.color = '#55F991'
})

function turnTexts() {
    let numberP = document.getElementById('numbers-p')
    let symbolsP = document.getElementById('symbols-p')
    if (includeNumbersEl.checked) {
        numberP.style.color = '#10B981'
    } else {
        numberP.style.color = 'orange'
    }
    if (includeSymbolsEl.checked) {
        symbolsP.style.color = '#10B981'
    } else {
        symbolsP.style.color = 'orange'
    }
}

firstPasswordEl.addEventListener('click', function() {
    navigator.clipboard.writeText(firstPasswordEl.textContent)
    alert('Copied to Clipboard.')
    firstPasswordEl.style.color = 'gray'
})

secondPasswordEl.addEventListener('click', function() {
    navigator.clipboard.writeText(secondPasswordEl.textContent)
    alert('Copied to Clipboard.')
    secondPasswordEl.style.color = 'gray'
})

passwordLengthEl.addEventListener('click', function() {
    if (passwordLengthEl.value > 15) {
        passwordLengthEl.style.borderColor = '#10B981'
        lengthPEl.style.color = '#10B981'
    } else {
        passwordLengthEl.style.borderColor = 'orange'
        lengthPEl.style.color = 'orange'
    }
})