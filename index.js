const computerChoice_element = document.getElementById('computer-choice');
const userChoice_element = document.getElementById('user-choice');
const result_element = document.getElementById('result');
const usernameInput = document.getElementById('username');

const posssibleChoices = document.querySelectorAll('.options');
let userChoice
let computerChoice
let result
let username

let nextButton_element = document.getElementById('next_button');
nextButton_element.addEventListener('click', () => {
    username = usernameInput.value;
    console.log(username);
});


posssibleChoices.forEach((possibleChoice) => {
    possibleChoice.addEventListener('click', (a) => {
        let userChoice_id = a.target.id // seçilenin id değerini alır ex> id: rock_id ;
        let userChoice_button = document.getElementById(userChoice_id);
        userChoice = userChoice_element.innerText = userChoice_button.innerText;
        computerChoice = computerChoice_element.innerText = generateComputerChoice();
        result_element.innerText = getResult();
    })}
)


function generateComputerChoice() {
    let randomNumber = Math.floor( Math.random() * 3 ) + 1;
    switch (randomNumber) {
        case 1:
            randomNumber = 'rock';
            break;
        case 2:
            randomNumber = 'paper';
            break;
        case 3:
            randomNumber = 'scissors';
            break;
    }
    return randomNumber;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!';
    }
    else if (userChoice === 'rock' && computerChoice === 'paper') {
        result = 'computer wins';
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        result = username + ' wins';
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        result =  username + ' wins';
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        result = 'computer wins';
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        result = 'computer wins';
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        result =  username + ' wins';
    }
    return result;
}

