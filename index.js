function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number >= 0 && number < 1) {
        return 'Rock';
    } else if (number >= 1 && number < 2) {
        return 'Paper';
    } else if (number >= 2 && number < 3) {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionCaps = playerSelection.toUpperCase();
    switch(playerSelectionCaps) {
        case 'ROCK':
            switch(computerSelection) {
                case 'Rock':    
                    return 'It\'s a draw!';
                case 'Paper':
                    return 'You lose bwahahaha';
                case 'Scissors':
                    return 'You win. What dy expect? It\'s rock paper scissors!';
            }
        case 'PAPER':
            switch(computerSelection) {
                case 'Rock':     
                return 'You win. What dy expect? It\'s rock paper scissors!';  
                case 'Paper':
                    return 'It\'s a draw!';
                case 'Scissors':
                    return 'You lose bwahahaha';
            }
        case 'SCISSORS':
            switch(computerSelection) {
                case 'Rock':
                    return 'You lose bwahahaha';        
                case 'Paper':
                    return 'You win. What dy expect? It\'s rock paper scissors!';
                case 'Scissors':
                    return 'It\'s a draw!';
            }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('What do you want to use? (Rock, paper, scissors)', 'rock maybe?');
        computerSelection = getComputerChoice();
        document.write(`${playRound(playerSelection, computerSelection)} `);
    }
}
