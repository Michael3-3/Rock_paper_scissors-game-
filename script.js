// consider you have two attributes userchoice and computerchoice and write the logic to find the winner

const arrComputerChoice = ["rock", "paper", "scissors"];
const userRing = document.getElementById("user-score");
const compRing = document.getElementById("comp-score");
const arrUserChoice = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
let userWin = true;
let userScore = 0;
let compScore = 0;
function findWinner(userChoice ) {
    let computerChoice = getComputerChoice();
    if(userChoice === computerChoice) {
        return "It's a tie!";
    }
    else if(userChoice === "rock") {
        computerChoice === "scissors"? userScore++ : compScore++;
        computerChoice === "scissors"? userWin=true : userWin=false;
    }
    else if(userChoice === "paper") {
        computerChoice === "rock"? userScore++ : compScore++;
        computerChoice === "rock"? userWin=true : userWin=false;
    }
    else{
        computerChoice === "paper"? userScore++ : compScore++;
        computerChoice === "paper"? userWin=true : userWin=false;
    }
    console.log( `${userScore} : ${compScore} : ${userWin}`);
    if(userWin) {
        msg.innerText="you won!"; 
    }   else {
    msg.innerText="you lost!. Try again!";
    }

    userRing.innerText = userScore;
    compRing.innerText = compScore;

    if(userScore === 5 || compScore === 5) {
        msg.innerText="game over!";
        userScore = 0;
        compScore =0;
}
}

// lets pass computer's choice to the function

function getComputerChoice() {
    return arrComputerChoice[Math.floor(Math.random()*3)]
}

// lets pass user's choice to the function this is the main function for the game

arrUserChoice.forEach(ch=> {
    console.log(ch);
    ch.addEventListener("click", ()=> {
       console.log(findWinner(ch.getAttribute("id")));

    })
    
})



