import { questions } from './utils/questions.js'
import { chooseRandomQuestion } from './utils/functions/chooseRandomQuestion.js'
import { showRandomQuestionUI } from './utils/functions/showRandomQuestionUI.js'

const playGameButton = document.querySelector(".play-game")
playGameButton.addEventListener("click", () => {
    let randomQuestion = chooseRandomQuestion(questions)

    showRandomQuestionUI(randomQuestion)

    playGameButton.style.display = "none" 
})