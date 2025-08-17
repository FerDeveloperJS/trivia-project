import { questions } from "../questions.js"
import { chooseRandomQuestion } from "./chooseRandomQuestion.js"
import { hideQuestionUI } from "./hideQuestion.js"
import { showRandomQuestionUI } from "./showRandomQuestionUI.js"

export function countTime() {
    let count = 4

    setInterval(() => {
        let timer = document.querySelector(".timer")
        
        timer.innerText = count

        if (count === 0) {
            count = 4

            let randomQuestion = chooseRandomQuestion(questions)

            hideQuestionUI()
            showRandomQuestionUI(randomQuestion)
        }

        count--
    }, 1000)
}