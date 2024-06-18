let alexaScore = document.querySelector("#alexa-score")
let humanScore = document.querySelector("#human-score")
let result = document.querySelector(".result")
const select = document.querySelector(".game-mode")
const resultSelect = document.querySelector(".result-select")

let changeInAlexaScore = 0
let changeInHumanScore = 0

const youStart = (human) => {

    if (select.value == 'livre') {
        playTheGame(human, randomNumber());
    }
    if (select.value == 'melhor-cinco') {
        playTheGameModeTwo(human, randomNumber());
    }
    if (select.value == 'melhor-dez') {
        playTheGameModeTree(human, randomNumber());
    }
}

const randomNumber = () => {

    let options = ["rock", "paper", "scissors"]
    let numbers = Math.floor(Math.random() * 3)

    return options[numbers]

}

const playTheGame = (human, alexa) => {

    if (human === alexa) {
        result.innerHTML = "Deu Empate"
    }
    else if (
        human === "rock" && alexa === "scissors" ||
        human === "scissors" && alexa === "paper" ||
        human === "paper" && alexa === "rock"
    ) {
        changeInHumanScore++
        humanScore.innerHTML = changeInHumanScore
        result.innerHTML = "Você Ganhou!!"
    } else {
        changeInAlexaScore++
        alexaScore.innerHTML = changeInAlexaScore
        result.innerHTML = "Alexa Ganhou"
    }

}

const playTheGameModeTwo = (human, alexa) => {

    if (human === alexa) {
        result.innerHTML = "Deu Empate"
    } else if (
        human === "rock" && alexa === "scissors" ||
        human === "scissors" && alexa === "paper" ||
        human === "paper" && alexa === "rock"
    ) {
        changeInHumanScore++
        humanScore.innerHTML = changeInHumanScore
        result.innerHTML = "Você Ganhou!!"
    } else {
        changeInAlexaScore++
        alexaScore.innerHTML = changeInAlexaScore
        result.innerHTML = "Alexa Ganhou"
    }
    bestOfFive()
}

const playTheGameModeTree = (human, alexa) => {

    if (human === alexa) {
        result.innerHTML = "Deu Empate"
    } else if (
        human === "rock" && alexa === "scissors" ||
        human === "scissors" && alexa === "paper" ||
        human === "paper" && alexa === "rock"
    ) {
        changeInHumanScore++
        humanScore.innerHTML = changeInHumanScore
        result.innerHTML = "Você Ganhou!!"
    } else {
        changeInAlexaScore++
        alexaScore.innerHTML = changeInAlexaScore
        result.innerHTML = "Alexa Ganhou"
    }
    bestOfTen()
}

const bestOfFive = () => {

    let punctuationAlexa = changeInAlexaScore
    let punctuationHuman = changeInHumanScore

    if (punctuationHuman === 5) {
        alert("Você Ganhou o jogo!!")
        resetGame()
    }
    if (punctuationAlexa === 5) {
        alert("Alexa Ganhou o jogo!!")
        resetGame()
    }

}

const bestOfTen = () => {

    let punctuationAlexa = changeInAlexaScore
    let punctuationHuman = changeInHumanScore

    if (punctuationHuman === 10) {
        alert("Você Ganhou o jogo!!")
        resetGame()
    }
    if (punctuationAlexa === 10) {
        alert("Alexa Ganhou o jogo!!")
        resetGame()
    }

}

const resetGame = () => {

    let alexa = changeInAlexaScore = 0
    let human = changeInHumanScore = 0
    let resultReset = result

    humanScore.innerHTML = human
    alexaScore.innerHTML = alexa

    resultReset.innerHTML = ""
}

const gameMode = () => {

    if (select.value === 'livre') {
        resultSelect.innerHTML = "Livre"
        resetGame()
    }
    if (select.value === 'melhor-cinco') {
        resultSelect.innerHTML = "Melhor de 5"
        resetGame()
    }
    if (select.value === 'melhor-dez') {
        resultSelect.innerHTML = "Melhor de 10"
        resetGame()
    }
}