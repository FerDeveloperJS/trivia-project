export function showRandomQuestionUI(question) {
    const gameContainer = document.querySelector(".game-container")
    const optionsContainer = document.createElement("div")
    optionsContainer.classList.add("options-container")

    let questionString = question.pregunta
    let options = question.opciones
    let correctAnswer = question.respuesta_correcta

    let divQuestion = document.createElement("div")
    divQuestion.classList.add("question")
    divQuestion.innerText = questionString
    gameContainer.appendChild(divQuestion)

    options.forEach(option => {
        let optionButton = document.createElement("button")
        optionButton.innerText = option
        optionButton.classList.add("option")
        optionsContainer.appendChild(optionButton)
    });

    gameContainer.appendChild(optionsContainer)
}