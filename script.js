function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number >= 0 && number < 1) {
        return 'rock';
    } else if (number >= 1 && number < 2) {
        return 'paper';
    } else if (number >= 2 && number < 3) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionCaps = playerSelection.toUpperCase();
    switch(playerSelectionCaps) {
        case 'ROCK':
            switch(computerSelection) {
                case 'rock':    
                    return 'It\'s a draw!';
                case 'paper':
                    return 'You lose bwahahaha';
                case 'scissors':
                    return 'You win. What dy expect? It\'s rock paper scissors!';
            }
        case 'PAPER':
            switch(computerSelection) {
                case 'rock':     
                return 'You win. What dy expect? It\'s rock paper scissors!';  
                case 'paper':
                    return 'It\'s a draw!';
                case 'scissors':
                    return 'You lose bwahahaha';
            }
        case 'SCISSORS':
            switch(computerSelection) {
                case 'rock':
                    return 'You lose bwahahaha';        
                case 'paper':
                    return 'You win. What dy expect? It\'s rock paper scissors!';
                case 'scissors':
                    return 'It\'s a draw!';
            }
        default:
            console.log('Breh that wasn\'t rock, paper or scissors.');
    }
}

function game() {
    //keep tab of results from each of the 5 games
    let results = [];

    //use playRound() to play 5 games
    for (let i = 0; i < 5; i++) {
        // play one game & add result 
        const playerSelection = prompt('Rock, paper or scissors?');
        const computerSelection = getComputerChoice();
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}.`);
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        results.push(result)
     }
}

game()