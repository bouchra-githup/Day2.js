// test 
console.log("Hello World");

// Function to get a random computer choice:
const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"]
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};
// testing the function
const computerChoice = getComputerChoice();
console.log('Computer choice:', computerChoice);


//Function to select a winner  by round:

const playRound = (playerSelection, computerSelection) =>{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

if (playerSelection === computerSelection){
    return "It's a tie!";
} else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock')) 
{
    return 'You win!';
} else {
    return 'You lose!';
}
};
// Testing the function
const playerSelection = 'paper'; 
const computerSelection = getComputerChoice(); 
const result = playRound(playerSelection, computerSelection);
console.log(result);


   
// Function to play the game
    let playerScore = 0;
    let computerScore = 0;
    const game = () =>  {
        for (let i = 0; i < 5; i++) {
            const playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
            const computerChoice = getComputerChoice();

            const roundResult = playRound(playerChoice, computerChoice);
            console.log(roundResult);
    
            if (roundResult.includes("win")) 
            {
                playerScore++;
            } 
            else if (roundResult.includes("lose"))
             {
                computerScore++;
            }
        }
    
            if (playerScore > computerScore) {

                console.log("You win the game!");

            } else if (computerScore > playerScore){

                console.log("You lose the game!");
            } else {

                console.log("It's a tie game!");
             }

};
game();























