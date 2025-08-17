import { questions } from "../questions.js"
import { chooseRandomQuestion } from "./chooseRandomQuestion.js"
import { hideQuestionUI } from "./hideQuestionUI.js"
import { showRandomQuestionUI } from "./showRandomQuestionUI.js"

export function countTime() {
    let count = 4
    let timer = document.querySelector(".timer")

    setInterval(() => {
        
        timer.innerText = count

        if (count === 0) {

            let randomQuestion = chooseRandomQuestion(questions)

            hideQuestionUI()
            showRandomQuestionUI(randomQuestion)

            count = 4
        }

        else {
            count--
        }

        
    }, 1000)
}