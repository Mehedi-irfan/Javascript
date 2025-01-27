let randomNumber = parseInt(Math.random() * 100 + 1);

const submitBtn = document.querySelector('#subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guessArr');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPara');

let p = document.createElement('p');

let prevGues = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submitBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Give a valid Number;")
    }else if(guess < 1){
        alert("Please give a number grather then 1")
    }else if (guess >100){
        alert("Please give a number less then 100")
    } else{
        prevGues.push(guess)
        if(numGuess == 10){
            displayGuess(guess);
            displayGuess(`<br/>Game is Over. <br/> Random Number Was :- ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
   if(guess == randomNumber){
    displayMessage('You guessed it Right!')
   }else if(guess < randomNumber){
    displayMessage("Your Number Is Too Low!")
   }else if (guess > randomNumber){
    displayMessage("Your Number is Too High!")
   }
}

function displayGuess(guess){
    userInput.value = " ";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h4>${message}</h4>`
}

function endGame(){
    userInput.value = ' ';
    userInput.setAttribute("disabled", '');
    p.classList.add('button');
    p.innerHTML= `<h3 id="new_Game">Start New Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){
    let new_Game = document.querySelector('#new_Game');
    new_Game.addEventListener('click', (e)=> {
        randomNumber =parseInt(Math.random() * 100 + 1);
        prevGues =[];
        numGuess = 1;
        guessSlot.innerHTML = ' ';
        lowOrHi.innerHTML = ' '
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })
}

