function getComputerChoice() {
    let choicearr = ['rock', 'paper', 'scissors'];
    return choicearr[Math.floor(Math.random()*choicearr.length)];
}

function play(playerSelection, computerSelection) {
    let pS = playerSelection.toLowerCase();

    if (pS == computerSelection)
    {
        return "Tie!";
    }

    if (pS == 'rock')
    {
        if(computerSelection == 'paper')
        {
            return "You Lose! Paper beats Rock";
        }
        else
        {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (pS == 'paper')
    {
        if(computerSelection == 'rock')
        {
            return "You Win! Paper beats Rock";
        }
        else
        {
            return "You Lose! Scissors beats Paper";
        }
    }
    else if (pS == 'scissors')
    {
        if(computerSelection == 'rock')
        {
            return "You Lose! Rock beats Scissors";
        }
        else
        {
            return "You Win! Scissors beats Paper";
        }
    }
    else
    {
        return "This is an invalid choice.";
    }

}

function game()
{
    pScore = 0;
    cScore = 0;
    for (let i = 0; i < 5; i++)
    {
        pC = prompt("Enter Choice: ");
        cC = getComputerChoice();
        res = play(pC, cC)
        console.log(res);
        if (res.charAt(4) == 'W')
        {
            pScore++;
        }
        else if(res.charAt(4) == 'L')
        {
            cScore++;
        }
    }
    if(pScore > cScore)
    {
        console.log("Final: Player Wins");
    }
    else if(cScore > pScore) {
        console.log("Final: Computer Wins");
    }
    else
    {
        console.log("Final: Tie")
    }
}


