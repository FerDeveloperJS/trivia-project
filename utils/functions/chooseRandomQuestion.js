export function chooseRandomQuestion(questions) {
    let randomNumber = Math.floor(Math.random() * questions.length)
    let randomQuestion = questions[randomNumber]

    return randomQuestion
}