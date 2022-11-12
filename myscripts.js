const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.className, getComputerChoice());
        if(p == 5)
        {
            results.textContent = "Congrats on beating the computer to 5 wins! You have successfully beat the computer!";
            buttons.forEach((button) => {button.disabled = true;});
        }
        if(c == 5)
        {
            results.textContent = "Computer has reached 5 wins. Sorry, you have lost.";
            buttons.forEach((button) => {button.disabled = true;});
        }
    });
});
p = 0;
c = 0;

const results = document.querySelector('.results');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.compScore');
cScore.textContent = c;
pScore.textContent = p;

function getComputerChoice() {
    let choicearr = ['rock', 'paper', 'scissors'];
    return choicearr[Math.floor(Math.random()*choicearr.length)];
}

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection;
    if (pS == computerSelection)
    {
        results.textConten="Tie!";
    }

    if (pS == 'rock')
    {
        if(computerSelection == 'paper')
        {
            results.textContent = "You Lose! Paper beats Rock";
            c++;
            cScore.textContent = c.toString();
        }
        else
        {
            results.textContent="You Win! Rock beats Scissors";
            p++;
            pScore.textContent = p.toString();
        }
    }
    else if (pS == 'paper')
    {
        if(computerSelection == 'rock')
        {
            results.textContent="You Win! Paper beats Rock";
            p++;
            pScore.textContent = p.toString();
        }
        else
        {
            results.textContent="You Lose! Scissors beats Paper";
            c++;
            cScore.textContent = c.toString();
        }
    }
    else if (pS == 'scissors')
    {
        if(computerSelection == 'rock')
        {
            results.textContent="You Lose! Rock beats Scissors";
            c++;
            cScore.textContent = c.toString();
        }
        else
        {
            results.textContent="You Win! Scissors beats Paper";
            p++;
            pScore.textContent = p.toString();
        }
    }
    else
    {
        results.textContent="This is an invalid choice.";
    }
}



