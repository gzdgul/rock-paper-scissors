const computerChoice_element = document.getElementById('computer-choice');
const userChoice_element = document.getElementById('user-choice');
const result_element = document.getElementById('result');
const usernameInput = document.getElementById('username');

const posssibleChoices = document.querySelectorAll('.options');
let result
let username

const main_div = document.getElementById('main');
const button_div = document.getElementById('button_div');
const options_div = document.getElementById('options_div');

let nextButton_element = document.getElementById('next_button');
nextButton_element.addEventListener('click', () => {
    if (usernameInput.value.trim()){
        username = usernameInput.value;
        button_div.className = null; // d-none remover. because we want show them.
        console.log(username);
    }
    else {
        alert('enter your username');
    }

});


posssibleChoices.forEach((possibleChoice) => {
    possibleChoice.addEventListener('click', (a) => {

        if (usernameInput.value) {
            let userChoice_id = a.target.id // seçilenin id değerini alır ex> id: rock_id ;
            let userChoice_button = document.getElementById(userChoice_id);
            let userChoice = userChoice_element.innerText = userChoice_button.innerText;
            let computerChoice = computerChoice_element.innerText = generateComputerChoice();
            result = result_element.innerText = getResult(userChoice, computerChoice);
            options_div.className = null;
            lookAtResult(result);
        }
        else {
            alert('enter your username');
        }

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

function getResult(
    computerChoice,
    userChoice
) {
    if (computerChoice === userChoice) {
        return 'its a draw!';
    }
    else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'computer wins';
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return username + ' wins';
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return username + ' wins';
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'computer wins';
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'computer wins';
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return  username + ' wins';
    }
}

function lookAtResult(
    result
) {
    console.log(result);
    if (result.includes('computer')) {
        main_div.className = 'bg-danger';
    }
    else if (result.includes('draw')) {
        main_div.className = 'bg-warning';
    }
    else  main_div.className = 'bg-success';
}