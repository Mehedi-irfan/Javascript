//takaing random value
let randomNumber = parseInt(Math.random() * 100 +1);

//taking all variable from html page 
const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField')
const startOver = document.querySelector('.resultPara');
const guessSlot = document.querySelector('.guessArr');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

//create a new element
const p = document.createElement('p')

//taking some import varible
//taking array to hold all value
let prevGuess = [] ;
let numGuess = 1
let playGame = true;

if(playGame){
    submitBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}

//check validation using this function
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Provide a valid number");
    }else if(guess< 0){
        alert("Please Provide a number grater than 1")
    } else if (guess > 100){
        alert("Please provide a number less than 100")
    } else{
        prevGuess.push(guess)
        if(numGuess == 11){
            displayGuess(guess);
            displayMessage(`<br/> Game is Over. <br/> The random number was :- ${random}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

//check guess value are right or not using this function
function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`Yeha! You Guessed it right`)
        endGame()
    }else if (guess < randomNumber){
        displayMessage(`Your Guess value is too Low!`)
    }else if(guess > randomNumber){
        displayMessage(`Your Guess value is too High!`)
    }
}

//this function working as a display the guess value
function displayGuess(guess){
    userInput.value = ' ';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

//this function working as a display message 
function displayMessage(message){
    lowOrHi.innerHTML = `<h4>${message}</h4>`
}

//for ending game using this function 
function endGame(){
    userInput.value = " ";
    userInput.setAttribute('disabled', '');
    lowOrHi.innerHTML = " ";
    p.innerHTML = `<button id="new_game" class="button">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

//for start a new game using this function
function newGame(){
    let new_game = document.getElementById('new_game');
    new_game.addEventListener("click", ()=> {
        randomNumber = parseInt(Math.random() * 100 +1);
        prevGuess = [];
        numGuess= 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = " ";
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true
    })
}

