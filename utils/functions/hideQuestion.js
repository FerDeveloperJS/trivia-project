export function hideQuestionUI() {
    let divQuestion = document.querySelector(".question")
    let optionsContainer = document.querySelector(".options-container")

    if (divQuestion) divQuestion.remove()
    if (optionsContainer) optionsContainer.remove()

}