let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#computer-score")

const genComChoice = () => {
    const options = ["rock" , "paper" , "scissor"] 
    const randInx = Math.floor(Math.random() * 3)
    return options[randInx]
}

const drawGame = () => {
    console.log("game was draw")
    msg.innerText = "Game Draw, Play Again"
    msg.style.backgroundColor= "#081b31"

}

const showWinner = (userWin, usserChoice , compCHoice) => {
    if (userWin) {
       userScore++;
       userScorePara.innerText = userScore;
        console.log("you win")
        msg.innerText = `you win! ${usserChoice} beats ${compCHoice}`
        msg.style.backgroundColor= "green"

    } else {
       compScore++;
       compScorePara.innerText = compScore;
        console.log("you lose")
        msg.innerText =`you lose! ${compCHoice} beats ${usserChoice}`
        msg.style.backgroundColor= "red"

    }
}

 const playGame = (usserChoice) => {
    console.log("user choice = ", usserChoice)
    const compCHoice = genComChoice();
    console.log("comp choice = " , compCHoice)

    if (usserChoice === compCHoice) {
        drawGame();
    } else { let userWin = true;
        if (usserChoice === "rock") {
            userWin = compCHoice === "paper" ? false : true;
        } else if (usserChoice === "paper") {
            userWin = compCHoice === "scissor" ? false : true;
        } else  {
            userWin = compCHoice === "rock" ? false : true;
        }
        
        showWinner(userWin, usserChoice , compCHoice );
    }
 }

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const usserChoice = choice.getAttribute("id")
        console.log("choice was clicked" , usserChoice)
        playGame(usserChoice);
    })
})