import { questions } from './utils/questions.js'
import { chooseRandomQuestion } from './utils/functions/chooseRandomQuestion.js'
import { showRandomQuestionUI } from './utils/functions/showRandomQuestionUI.js'
import { countTime } from './utils/functions/countTime.js'

const playGameButton = document.querySelector(".play-game")
playGameButton.addEventListener("click", () => {


    const gameContainer = document.querySelector(".game-container")

    let randomQuestion = chooseRandomQuestion(questions)

    showRandomQuestionUI(randomQuestion)
    let divTimer = document.createElement("div")
    divTimer.classList.add("timer")
    gameContainer.appendChild(divTimer)

    countTime()
    

    playGameButton.style.display = "none" 
})